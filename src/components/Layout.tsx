import { FolderRounded, SettingsRounded } from '@mui/icons-material'
import { Button, Container } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const PageContainer = styled(Box)`
  display: grid;
`

const LogoWrapper = styled(Box)`
  cursor: pointer;
`

const AppBar = styled(Container)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  justify-content: space-between;
`

const Links = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2rem;
`
const BodyContainer = styled(Container)`
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const Layout: React.FC = ({ children }) => {
  return (
    <PageContainer>
      <AppBar>
        <Box>
          <Link href="/">
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          </Link>
        </Box>

        <Links>
          <Link href="/diagnostics">
            <Button color="secondary" startIcon={<FolderRounded />}>
              Diagnósticos
            </Button>
          </Link>
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
