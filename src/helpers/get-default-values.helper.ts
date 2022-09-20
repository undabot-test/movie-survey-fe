import { SurveyFormValues } from '@organisms/survey-form/survey-form.types'
import { questionsService } from '@services/questions'

export const getDefaultValues = () => {
  const { questions$ } = questionsService
  return questions$.reduce((acc, cur) => {
    acc[cur.id] = ''
    return acc
  }, {} as SurveyFormValues)
}
