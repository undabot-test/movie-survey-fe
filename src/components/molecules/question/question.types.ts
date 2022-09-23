import { ControllerRenderProps } from 'react-hook-form'
import { QuestionTypes } from '@constants/question-types.constant'
import { QuestionAttributes } from '@interfaces/question.interface'

export type QuestionProps = {
  index: number
  name: string
  type: QuestionTypes
  question: string
  required: boolean
  attributes: QuestionAttributes
}

export type RenderInputVariables = {
  field: ControllerRenderProps
}
