import { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form'

export const getErrorProps = (error?: FieldError | Merge<FieldError, FieldErrorsImpl>) => {
  return {
    error: Boolean(error),
    helperText: String(error?.message || ''),
  }
}
