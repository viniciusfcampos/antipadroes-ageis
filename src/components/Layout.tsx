import { FolderRounded, SettingsRounded } from '@mui/icons-material'
import { Button, Container, IconButton, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import clsx from 'clsx'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { useAuth } from '../contexts/AuthContext'
import Logo from './Logo'
import SignInModal from './SignInModal'
import UserAvatar from './UserAvatar'

const PageContainer = styled(Box)`
  && {
    display: grid;
  }
`

const LogoWrapper = styled(Box)`
  cursor: pointer;
`

const AppBar = styled(Container)`
  && {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    justify-content: space-between;
  }
`

const Links = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2rem;

  &.small {
    grid-gap: 1rem;
  }
`

const BodyContainer = styled(Container)`
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const Layout: React.FC = ({ children }) => {
  const { authenticated, adminAuthenticated } = useAuth()

  const theme = useTheme()

  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <Head>
        <meta name="description" content="Práticas ágeis são atividades utilizadas para manifestar ou implementar os princípios e valores apresentados no Manifesto Ágil. Por serem pouco prescritivas, pode ser difícil para uma organização identificar se ela está cumprindo o objetivo esperado. Além disso, a alta adaptabilidade de uma prática ágil permite que sejam introduzidas certas características ou comportamentos, conhecidos como antipadrões, que podem torná-la ineficaz ou até mesmo prejudicial para o time." />
      </Head>
      <PageContainer>
        <AppBar>
          <Box>
            <Link href="/">
              <LogoWrapper>
                <Logo />
              </LogoWrapper>
            </Link>
          </Box>

          <Links className={clsx({ small: smallScreen })}>
            {authenticated && (
              <>
                {smallScreen && (
                  <Link href="/diagnostics">
                    <IconButton color="secondary">
                      <FolderRounded />
                    </IconButton>
                  </Link>
                )}
                {!smallScreen && (
                  <Link href="/diagnostics">
                    <Button color="secondary" startIcon={<FolderRounded />}>
                      Diagnósticos
                    </Button>
                  </Link>
                )}
              </>
            )}
            {adminAuthenticated && (
              <>
                {smallScreen && (
                  <Link href="/settings">
                    <IconButton color="secondary">
                      <SettingsRounded />
                    </IconButton>
                  </Link>
                )}
                {!smallScreen && (
                  <Link href="/settings">
                    <Button color="secondary" startIcon={<SettingsRounded />}>
                      Configurações
                    </Button>
                  </Link>
                )}
              </>
            )}
            <UserAvatar />
          </Links>
        </AppBar >
        <BodyContainer>{children}</BodyContainer>
        <SignInModal />
      </PageContainer >
    </>
  )
}

export default Layout
