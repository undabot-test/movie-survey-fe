import { ISurvey } from '@interfaces/survey.interface'

export type Survey = {
  id: string
  title: string
  description: string
}

export type GetSurveyResult = ISurvey

export interface ISurveyService {
  survey$: Survey | null
  getSurvey: () => Promise<void>
}
