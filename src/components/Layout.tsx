import { Button, Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Link from 'next/link'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import FolderRoundedIcon from '@mui/icons-material/FolderRounded'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'

const PageContainer = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
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
`

const Layout: React.FC = ({ children }) => {
  return (
    <PageContainer>
      <AppBar>
        <Logo />

        <Links>
          <Link href="/">
            <Button color="secondary" startIcon={<HomeRoundedIcon />}>
              Home
            </Button>
          </Link>
          <Link href="/new-diagnostic">
            <Button color="secondary" startIcon={<AddCircleRoundedIcon />}>
              Novo
            </Button>
          </Link>
          <Link href="/diagnostics">
            <Button color="secondary" startIcon={<FolderRoundedIcon />}>
              Diagnósticos
            </Button>
          </Link>
        </Links>
      </AppBar>
      <BodyContainer>{children}</BodyContainer>
    </PageContainer>
  )
}

export default Layout
