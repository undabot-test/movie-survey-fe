import { RatingProps } from '@mui/material'

export type RatingFieldProps = RatingProps & {
  error?: boolean
  helperText?: string
}
