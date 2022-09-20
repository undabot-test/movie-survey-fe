import { ISurvey } from '@interfaces/survey.interface'

export type Survey = {
  id: string
  title: string
  description: string
}

export type GetSurveyResult = ISurvey
