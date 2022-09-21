import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Typography } from '@mui/material'
import { surveyService } from '@services/survey'
import { PageLoader } from '@atoms/page-loader'
import { SurveyForm } from '@organisms/survey-form'
import * as Styled from './survey.styles'

const Survey = () => {
  const { survey$ } = surveyService
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    surveyService.getSurvey().finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <PageLoader />
  }

  return (
    <Styled.Page maxWidth="sm">
      <Typography variant="h2" align="center">
        {survey$?.title}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        dangerouslySetInnerHTML={{ __html: survey$?.description || '' }}
        sx={{ mb: 5 }}
      />
      <SurveyForm />
    </Styled.Page>
  )
}

export default observer(Survey)
