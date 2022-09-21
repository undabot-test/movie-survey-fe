import { CircularProgress } from '@mui/material'
import * as Styled from './page-loader.styles'

export const PageLoader = () => {
  return (
    <Styled.Page maxWidth="sm">
      <CircularProgress />
    </Styled.Page>
  )
}
