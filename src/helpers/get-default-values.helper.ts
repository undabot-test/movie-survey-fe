import { surveyService } from '@services/survey'
import { SurveyFormValues } from '@organisms/survey-form/survey-form.types'

export const getDefaultValues = () => {
  const { survey$ } = surveyService
  return survey$?.attributes.questions.reduce((acc, cur) => {
    acc[cur.questionId] = ''
    return acc
  }, {} as SurveyFormValues)
}
