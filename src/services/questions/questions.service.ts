import { action, makeObservable, observable } from 'mobx'
import { IQuestion } from '@interfaces/question.interface'
import { Question } from './questions.types'

class QuestionsService {
  questions$: Question[] = []

  constructor() {
    makeObservable(this, {
      questions$: observable,
      setQuestions: action,
    })
  }

  setQuestions = (questions: IQuestion[]) => {
    this.questions$ = questions.map(
      ({ questionId, questionType, label, required, attributes }) => ({
        id: questionId,
        type: questionType,
        question: label,
        required,
        attributes,
      })
    )
  }
}

export const questionsService = new QuestionsService()
