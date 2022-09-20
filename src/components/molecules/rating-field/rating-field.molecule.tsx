import { memo, forwardRef, ForwardedRef } from 'react'
import { FormHelperText, Rating } from '@mui/material'
import { RatingFieldProps } from './rating-field.types'

const RatingField = (
  { error, helperText, ...props }: RatingFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <>
      <Rating {...props} ref={ref} size="large" />
      <FormHelperText error={error} sx={{ ml: 2 }}>
        {error && helperText}
      </FormHelperText>
    </>
  )
}

export default memo(forwardRef(RatingField))
