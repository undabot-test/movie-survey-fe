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
    <Styled.Success>
      <Typography variant="h2">Thank you!</Typography>
      <Typography variant="body1" sx={{ mb: 5 }}>
        Preview of questions and answers.
      </Typography>
      {answers$.map(({ questionId, question, answer }) => (
        <Answer key={questionId} question={question} answer={answer} />
      ))}
    </Styled.Success>
  )
}

export default observer(Success)
