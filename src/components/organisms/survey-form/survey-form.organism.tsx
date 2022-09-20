import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { Button } from '@mui/material'
import { surveyService } from '@services/survey'
import { questionsService } from '@services/questions'
import { answersService } from '@services/answers'
import { getDefaultValues } from '@helpers/get-default-values.helper'
import { AppRoutes } from '@constants/app-routes.constant'
import { Question } from '@molecules/question'
import { SurveyFormValues } from './survey-form.types'

const SurveyForm = () => {
  const { questions$ } = questionsService
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const methods = useForm<SurveyFormValues>({
    defaultValues: getDefaultValues(),
    mode: 'onChange',
  })

  const onSubmit = (values: SurveyFormValues) => {
    const answers = questions$.map(({ id }) => ({
      questionId: id,
      answer: values[id],
    }))

    setLoading(true)
    answersService
      .getAnswers({
        surveyId: surveyService.survey$!.id,
        data: {
          type: 'surveyAnswers',
          attributes: {
            answers,
          },
        },
      })
      .then(() => navigate(AppRoutes.Success))
      .catch(() => setLoading(false))
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {questions$.map(({ id, question, type, required }, index) => (
          <Question
            key={id}
            index={index + 1}
            name={id}
            question={question}
            type={type}
            required={required}
          />
        ))}
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }} disabled={loading}>
          Submit
        </Button>
      </form>
    </FormProvider>
  )
}

export default observer(SurveyForm)
