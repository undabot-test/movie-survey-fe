import { memo, useCallback, useMemo } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { TextField, Typography } from '@mui/material'
import { RatingField } from '@molecules/rating-field'
import { QuestionTypes } from '@constants/question-types.constant'
import { getErrorProps } from '@helpers/get-error-props.helper'
import { QuestionProps, RenderInputVariables } from './question.types'
import * as Styled from './question.styles'
import { FIELD_VALIDATIONS } from './question.data'

const Question = ({ index, name, type, question, required, attributes }: QuestionProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const rules = useMemo(() => {
    const validateField = FIELD_VALIDATIONS[type]
    return {
      required: required && 'This field is required.',
      validate: validateField && validateField(attributes),
    }
  }, [type, required, attributes])

  const render = useCallback(
    ({ field }: RenderInputVariables) => {
      const error = getErrorProps(errors[name])

      switch (type) {
        case QuestionTypes.Text: {
          return <TextField {...field} {...error} />
        }
        case QuestionTypes.Rating: {
          return (
            <RatingField {...field} {...error} value={Number(field.value)} max={attributes?.max} />
          )
        }
        default: {
          return <TextField {...field} />
        }
      }
    },
    [type, name, attributes, errors]
  )

  return (
    <Styled.Question>
      <Typography variant="body1" sx={{ mb: 1 }}>
        {index}. {question}
      </Typography>
      <Controller name={name} control={control} rules={rules} render={render} />
    </Styled.Question>
  )
}

export default memo(Question)
