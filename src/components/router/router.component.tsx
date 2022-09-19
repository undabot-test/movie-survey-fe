import { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppRoutes } from '@constants/app-routes.constant'
import { Survey } from '@pages/survey'
import { Success } from '@pages/success'
import { NotFound } from '@pages/not-found'

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="loader">
        <Routes>
          <Route path={AppRoutes.Survey} element={<Survey />} />
          <Route path={AppRoutes.Success} element={<Success />} />
          <Route path={AppRoutes.NotFound} element={<NotFound />} />
          <Route path="*" element={<Navigate to={AppRoutes.NotFound} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
