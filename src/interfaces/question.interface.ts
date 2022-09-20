import { QuestionTypes } from '@constants/question-types.constant'

export interface Question {
  questionId: string
  questionType: QuestionTypes
  label: string
  required: boolean
}
