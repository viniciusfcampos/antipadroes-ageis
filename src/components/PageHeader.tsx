import { SvgIconProps, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components'

const Container = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
`

const TitleContainer = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  justify-content: start;
  align-items: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.lightText};
  fill: ${({ theme }) => theme.colors.lightText};
`

const Title = styled(Typography)`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2srem;
`

type PageHeaderProps = {
  icon: React.ReactElement<SvgIconProps>
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, title }) => {
  return (
    <Container>
      <TitleContainer>
        {icon}
        <Title variant="h1">{title}</Title>
      </TitleContainer>
    </Container>
  )
}

export default PageHeader
