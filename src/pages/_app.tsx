import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import materialTheme from '../styles/material-theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <MaterialThemeProvider theme={materialTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </MaterialThemeProvider>
    </ThemeProvider>
  )
}

export default MyApp
