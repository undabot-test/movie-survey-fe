import { IAnswer } from '@interfaces/answer.interface'

export type Answer = {
  questionId: string
  question: string
  answer: string | number
}

export type SubmitSurveyVariables = {
  surveyId: string
  data: {
    type: 'surveyAnswers'
    attributes: {
      answers: IAnswer[]
    }
  }
}

export type SubmitSurveyResult = {
  id: string
  attributes: {
    answers: IAnswer[]
  }
}
