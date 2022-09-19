import { Question } from './question.interface'

export interface Survey {
  id: string
  attributes: {
    title: string
    description: string
    questions: Question[]
  }
}
