import { memo, forwardRef, ForwardedRef } from 'react'
import { FormHelperText, Rating } from '@mui/material'
import { Star } from '@mui/icons-material'
import { RatingFieldProps } from './rating-field.types'

const RatingField = (
  { error, helperText, ...props }: RatingFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <>
      <Rating
        {...props}
        ref={ref}
        size="large"
        emptyIcon={<Star sx={{ opacity: 0.5 }} fontSize="inherit" />}
      />
      <FormHelperText error={error} sx={{ ml: 2 }}>
        {error && helperText}
      </FormHelperText>
    </>
  )
}

export default memo(forwardRef(RatingField))
