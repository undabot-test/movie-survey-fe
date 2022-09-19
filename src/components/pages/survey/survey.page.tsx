import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { surveyService } from '@services/survey'

const Survey = () => {
  const { survey$ } = surveyService
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    surveyService.getSurvey().finally(() => setLoading(false))
  }, [])

  return <div>{survey$?.attributes.title}</div>
}

export default observer(Survey)
