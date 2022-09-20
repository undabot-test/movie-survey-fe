import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { CircularProgress, Typography } from '@mui/material'
import { surveyService } from '@services/survey'
import { SurveyForm } from '@organisms/survey-form'
import * as Styled from './survey.styles'

const Survey = () => {
  const { survey$ } = surveyService
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    surveyService.getSurvey().finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <CircularProgress />
  }

  return (
    <Styled.Survey>
      <Typography variant="h2">{survey$?.title}</Typography>
      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{ __html: survey$?.description || '' }}
        sx={{ mb: 5 }}
      />
      <SurveyForm />
    </Styled.Survey>
  )
}

export default observer(Survey)
