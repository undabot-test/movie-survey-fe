import { QuestionTypes } from '@constants/question-types.constant'

export type Question = {
  id: string
  question: string
  type: QuestionTypes
  required: boolean
}
