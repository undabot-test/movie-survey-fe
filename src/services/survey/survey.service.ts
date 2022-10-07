import { makeObservable, observable, action } from 'mobx'
import { ISurvey } from '@interfaces/survey.interface'
import { questionsService } from '@services/questions'
import { IQuestionsService } from '@services/questions/questions.types'
import { makeRequest } from '@helpers/make-request.helper'
import { GetSurveyResult, ISurveyService, Survey } from './survey.types'

class SurveyService implements ISurveyService {
  survey$: null | Survey = null

  constructor(private readonly questionsService: IQuestionsService) {
    makeObservable<SurveyService, 'setSurvey'>(this, {
      survey$: observable,
      setSurvey: action,
    })
  }

  private setSurvey = ({ id, attributes }: ISurvey) => {
    const { title, description, questions } = attributes
    this.survey$ = { id, title, description }
    this.questionsService.setQuestions(questions)
  }

  getSurvey = () => {
    return makeRequest<GetSurveyResult>({
      url: 'survey',
      method: 'GET',
    }).then(this.setSurvey)
  }
}

export const surveyService = new SurveyService(questionsService)
