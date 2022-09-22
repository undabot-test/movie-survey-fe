import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fc6e51',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          boxShadow: '0 0 0 30px #fff inset !important',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: '#fff',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        iconFilled: {
          color: '#fc6e51',
        },
      },
    },
  },
})
