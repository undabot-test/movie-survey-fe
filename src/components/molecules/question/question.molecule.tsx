import { memo, useCallback } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { TextField, Typography } from '@mui/material'
import { QuestionTypes } from '@constants/question-types.constant'
import { RatingField } from '../rating-field'
import { QuestionProps, RenderInputVariables } from './question.types'
import * as Styled from './question.styles'

const Question = ({ index, name, type, question, required }: QuestionProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const renderInput = useCallback(
    ({ field }: RenderInputVariables) => {
      const error = errors[name]

      switch (type) {
        case QuestionTypes.Text: {
          return (
            <TextField
              {...field}
              error={!!error}
              helperText={error && 'This field is required'}
              sx={{ width: '100%' }}
            />
          )
        }
        case QuestionTypes.Rating: {
          return (
            <RatingField
              {...field}
              value={Number(field.value)}
              error={!!error}
              helperText="Please provide the rating"
            />
          )
        }
      }
    },
    [type, name, errors]
  )

  return (
    <Styled.Question>
      <Typography variant="body1" sx={{ mb: 1 }}>
        {index}. {question}
      </Typography>
      <Controller name={name} control={control} rules={{ required }} render={renderInput} />
    </Styled.Question>
  )
}

export default memo(Question)
