import { QuestionTypes } from '@constants/question-types.constant'
import { IQuestion, QuestionAttributes } from '@interfaces/question.interface'

export type Question = {
  id: string
  question: string
  type: QuestionTypes
  required: boolean
  attributes: QuestionAttributes
}

export interface IQuestionsService {
  questions$: Question[]
  setQuestions: (questions: IQuestion[]) => void
}