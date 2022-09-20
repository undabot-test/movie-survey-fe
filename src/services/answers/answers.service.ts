import { action, makeObservable, observable } from 'mobx'
import { makeRequest } from '@helpers/make-request.helper'
import { IAnswer } from '@interfaces/answer.interface'
import { questionsService } from '@services/questions'
import { SubmitSurveyVariables, SubmitSurveyResult, Answer } from './answers.types'

class AnswersService {
  answers$: Answer[] = []

  constructor() {
    makeObservable(this, {
      answers$: observable,
      setAnswers: action,
    })
  }

  setAnswers = (answers: IAnswer[]) => {
    this.answers$ = answers.map(({ questionId, answer }) => {
      const question = questionsService.questions$.find((question) => question.id === questionId)
      return {
        questionId,
        question: question?.question || '',
        answer,
      }
    })
  }

  getAnswers = ({ surveyId, data }: SubmitSurveyVariables) => {
    return makeRequest<SubmitSurveyResult>({
      url: `survey/${surveyId}/answers`,
      method: 'POST',
      body: {
        data,
      },
    }).then(({ attributes }) => this.setAnswers(attributes.answers))
  }
}

export const answersService = new AnswersService()
