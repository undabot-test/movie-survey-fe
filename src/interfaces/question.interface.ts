import { QuestionTypes } from '@constants/question-types.constant'

export interface IQuestion {
  questionId: string
  questionType: QuestionTypes
  label: string
  required: boolean
}
