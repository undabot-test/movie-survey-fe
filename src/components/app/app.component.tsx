import { ThemeProvider } from '@mui/material'
import { theme } from './app.theme'
import { Router } from '../router'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}
