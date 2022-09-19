import { lazy } from 'react'

export const NotFound = lazy(() => import(/* webpackChunkName: "not_found" */ './not-found.page'))
