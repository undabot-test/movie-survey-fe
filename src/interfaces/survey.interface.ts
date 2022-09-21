import { IQuestion } from './question.interface'

export interface ISurvey {
  id: string
  attributes: {
    title: string
    description: string
    questions: IQuestion[]
  }
}
