import { Typography, useMediaQuery, useTheme } from '@mui/material'
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
  height: 40px;
  width: 40px;
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
  const theme = useTheme()

  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Container>
      <LogoImage>
        <OriginalLogo />
      </LogoImage>
      {!smallScreen && (
        <Box>
          <Title>Diagnóstico de Antipadrões</Title>
          <PrimaryTitle>de Práticas Ágeis</PrimaryTitle>
        </Box>
      )}
    </Container>
  )
}

export default Logo
