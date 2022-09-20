import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { CircularProgress, Typography } from '@mui/material'
import { surveyService } from '@services/survey'
import { SurveyForm } from '@organisms/survey-form'

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
    <div>
      <Typography variant="h2">{survey$?.attributes.title}</Typography>
      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{ __html: survey$?.attributes.description || '' }}
      />
      <SurveyForm />
    </div>
  )
}

export default observer(Survey)
