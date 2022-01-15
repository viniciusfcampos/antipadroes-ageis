import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import OriginalLogo from '../assets/logo.svg'

const Container = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 0.5rem;
`

const LogoImage = styled(Box)`
  fill: ${({ theme }) => theme.colors.primary};
  height: 2rem;
  width: 2rem;
`

const Title = styled(Typography)`
  && {
    font-weight: 600;
    font-size: 0.75rem;
    display: block;
  }
`

const PrimaryTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.primary};
`

const Logo: React.FC = () => {
  return (
    <Container>
      <LogoImage>
        <OriginalLogo />
      </LogoImage>
      <Box>
        <Title>Diagnóstico de Antipadrões</Title>
        <PrimaryTitle>de Práticas Ágeis</PrimaryTitle>
      </Box>
    </Container>
  )
}

export default Logo
