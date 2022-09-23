import { validateRating } from '@helpers/validate-rating.helper'
import { QuestionTypes } from '@constants/question-types.constant'

export const FIELD_VALIDATIONS = {
  [QuestionTypes.Text]: undefined,
  [QuestionTypes.Rating]: validateRating,
}
