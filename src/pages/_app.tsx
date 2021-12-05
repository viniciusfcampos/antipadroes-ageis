import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import GlobalStyle from '../styles/global'
import materialTheme from '../styles/material-theme'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <MaterialThemeProvider theme={materialTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </MaterialThemeProvider>
    </ThemeProvider>
  )
}

export default MyApp