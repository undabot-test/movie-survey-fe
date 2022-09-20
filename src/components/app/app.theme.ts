import { createTheme } from '@mui/material'

export const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          boxShadow: '0 0 0 30px #fff inset !important',
        },
      },
    },
  },
})
