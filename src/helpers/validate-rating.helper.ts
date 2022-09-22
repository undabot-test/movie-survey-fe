import { QuestionAttributes } from '@interfaces/question.interface'

export const validateRating = (attributes: QuestionAttributes) => (value: string) => {
  if (attributes && attributes.min > +value) {
    return `Rating cannot be lower than ${attributes.min}.`
  }
  if (attributes && attributes.max < +value) {
    return `Rating cannot be higher than ${attributes.max}.`
  }
}
