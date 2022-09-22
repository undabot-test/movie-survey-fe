import { QuestionTypes } from '@constants/question-types.constant'
import { QuestionAttributes } from '@interfaces/question.interface'

export type Question = {
  id: string
  question: string
  type: QuestionTypes
  required: boolean
  attributes: QuestionAttributes
}
