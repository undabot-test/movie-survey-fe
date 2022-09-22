import { QuestionTypes } from '@constants/question-types.constant'

export type QuestionAttributes = null | { min: number; max: number }

export interface IQuestion {
  questionId: string
  questionType: QuestionTypes
  label: string
  required: boolean
  attributes: QuestionAttributes
}
