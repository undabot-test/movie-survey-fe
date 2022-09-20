import { ControllerRenderProps } from 'react-hook-form'
import { QuestionTypes } from '@constants/question-types.constant'

export type QuestionProps = {
  index: number
  name: string
  type: QuestionTypes
  question: string
  required: boolean
}

export type RenderInputVariables = {
  field: ControllerRenderProps
}
