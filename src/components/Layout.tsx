import {
  AddCircleRounded,
  FolderRounded,
  HomeRounded,
  SettingsRounded
} from '@mui/icons-material'
import { Button, Container, Divider, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const PageContainer = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  height: 100vh;
  overflow: hidden;
`

const LogoWrapper = styled(Box)`
  cursor: pointer;
`

const AppBar = styled(Box)`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 2rem;
  padding: 1.5rem 2rem;
`

const Links = styled(Box)`
  display: grid;
  grid-gap: 0.5rem;
  justify-items: start;
  align-content: start;
`

const BodyContainer = styled(Container)`
  padding-top: 6rem;
  padding-bottom: 4rem;
  overflow: auto;
`

const Layout: React.FC = ({ children }) => {
  return (
    <PageContainer>
      <AppBar>
        <Link href="/">
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </Link>

        <Links>
          <Link href="/">
            <Button color="secondary" startIcon={<HomeRounded />}>
              Home
            </Button>
          </Link>
          <Link href="/new-diagnostic">
            <Button color="secondary" startIcon={<AddCircleRounded />}>
              Novo
            </Button>
          </Link>
          <Link href="/diagnostics">
            <Button color="secondary" startIcon={<FolderRounded />}>
              Diagnósticos
            </Button>
          </Link>
          <Divider />
          <Link href="/settings">
            <Button color="secondary" startIcon={<SettingsRounded />}>
              Configurações
            </Button>
          </Link>
        </Links>
      </AppBar>
      <BodyContainer>{children}</BodyContainer>
    </PageContainer>
  )
}

export default Layout
