import { action, makeObservable, observable } from 'mobx'
import { makeRequest } from '@helpers/make-request.helper'
import { IAnswer } from '@interfaces/answer.interface'
import { questionsService } from '@services/questions'
import { IQuestionsService } from '@services/questions/questions.types'
import { SubmitSurveyVariables, SubmitSurveyResult, Answer, IAnswersService } from './answers.types'

class AnswersService implements IAnswersService {
  answers$: Answer[] = []

  constructor(private readonly questionsService: IQuestionsService) {
    makeObservable<AnswersService, 'setAnswers'>(this, {
      answers$: observable,
      setAnswers: action,
    })
  }

  private setAnswers = (answers: IAnswer[]) => {
    this.answers$ = answers.map(({ questionId, answer }) => {
      const question = this.questionsService.questions$.find(
        (question) => question.id === questionId
      )
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

export const answersService = new AnswersService(questionsService)
