import { lazy } from 'react'

export const Success = lazy(() => import(/* webpackChunkName: "success" */ './success.page'))
