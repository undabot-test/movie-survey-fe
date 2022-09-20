import { observer } from 'mobx-react-lite'
import { useForm, FormProvider } from 'react-hook-form'
import { Button } from '@mui/material'
import { surveyService } from '@services/survey'
import { getDefaultValues } from '@helpers/get-default-values.helper'
import { Question } from '@molecules/question'
import { SurveyFormValues } from './survey-form.types'

const SurveyForm = () => {
  const { survey$ } = surveyService
  const methods = useForm<SurveyFormValues>({
    defaultValues: getDefaultValues(),
    mode: 'onChange',
  })

  const onSubmit = (values: SurveyFormValues) => {
    console.log(values)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {survey$?.attributes.questions.map(
          ({ questionId, questionType, label, required }, index) => (
            <Question
              key={questionId}
              index={index + 1}
              name={questionId}
              type={questionType}
              question={label}
              required={required}
            />
          )
        )}
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </FormProvider>
  )
}

export default observer(SurveyForm)
