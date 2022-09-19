import { makeObservable, observable, action } from 'mobx'
import { Survey } from '@interfaces/survey.interface'
import { makeRequest } from '@helpers/make-request.helper'

class SurveyService {
  survey$: null | Survey = null

  constructor() {
    makeObservable(this, {
      survey$: observable,
      setSurvey: action,
    })
  }

  setSurvey = (survey: Survey) => {
    this.survey$ = survey
  }

  getSurvey = () => {
    return makeRequest<Survey>({
      url: 'api/v1/survey',
      method: 'GET',
    }).then(this.setSurvey)
  }
}

export const surveyService = new SurveyService()
