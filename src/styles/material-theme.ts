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
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundColor: theme.colors.lightBackground,
          '&.Mui-focused': {
            backgroundColor: theme.colors.lightBackground
          },
          '&:hover': {
            backgroundColor: theme.colors.lightBackground
          },
          '&:before': {
            display: 'none'
          },
          '&:after': {
            display: 'none'
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&[data-shrink="true"]': {
            transform: 'translate(14px, 6px) scale(0.75)'
          }
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    },
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
          padding: '1.5rem 2rem',
          boxShadow:
            'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          width: '100%',
          margin: '.5rem 0'
        }
      }
    }
  }
})

export default materialTheme
