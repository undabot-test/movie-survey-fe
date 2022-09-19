import { lazy } from 'react'

export const Survey = lazy(() => import(/* webpackChunkName: "survey" */ './survey.page'))
