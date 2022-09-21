import { makeObservable, observable, action } from 'mobx'
import { ISurvey } from '@interfaces/survey.interface'
import { questionsService } from '@services/questions'
import { makeRequest } from '@helpers/make-request.helper'
import { GetSurveyResult, Survey } from './survey.types'

class SurveyService {
  survey$: null | Survey = null

  constructor() {
    makeObservable(this, {
      survey$: observable,
      setSurvey: action,
    })
  }

  setSurvey = ({ id, attributes }: ISurvey) => {
    const { title, description, questions } = attributes
    this.survey$ = { id, title, description }
    questionsService.setQuestions(questions)
  }

  getSurvey = () => {
    return makeRequest<GetSurveyResult>({
      url: 'survey',
      method: 'GET',
    }).then(this.setSurvey)
  }
}

export const surveyService = new SurveyService()
