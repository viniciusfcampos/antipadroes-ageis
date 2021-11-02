import theme from './theme'

const { createTheme } = require('@mui/material')

const materialTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary
    },
    secondary: {
      main: theme.colors.secondary
    },
    text: {
      primary: theme.colors.text
    }
  },
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontWeight: 800
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: '1rem 2rem',
          boxShadow:
            'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
        }
      }
    }
  }
})

export default materialTheme
