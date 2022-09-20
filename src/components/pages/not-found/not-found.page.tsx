import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import { AppRoutes } from '@constants/app-routes.constant'
import * as Styled from './not-found.styles'

const NotFound = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(AppRoutes.Survey)
  }

  return (
    <Styled.Page maxWidth="sm">
      <Typography variant="h1">404</Typography>
      <Button variant="outlined" color="primary" sx={{ mt: 2 }} onClick={handleClick}>
        Homepage
      </Button>
    </Styled.Page>
  )
}

export default NotFound
