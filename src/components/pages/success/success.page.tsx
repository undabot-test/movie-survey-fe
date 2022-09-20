import { observer } from 'mobx-react-lite'
import { Navigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import { answersService } from '@services/answers'
import { AppRoutes } from '@constants/app-routes.constant'
import { Answer } from '@molecules/answer'
import * as Styled from './success.styles'

const Success = () => {
  const { answers$ } = answersService

  if (!answers$.length) {
    return <Navigate to={AppRoutes.Survey} />
  }

  return (
    <Styled.Page maxWidth="sm">
      <Typography variant="h2" align="center">
        Thank you!
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 5 }}>
        <p>Preview of questions and answers.</p>
      </Typography>
      {answers$.map(({ questionId, question, answer }) => (
        <Answer key={questionId} question={question} answer={answer} />
      ))}
    </Styled.Page>
  )
}

export default observer(Success)
