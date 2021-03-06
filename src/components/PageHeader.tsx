import { SvgIconProps, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components'

const Container = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const TitleContainer = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  justify-content: start;
  align-items: center;
  color: ${({ theme }) => theme.colors.lightText};
  fill: ${({ theme }) => theme.colors.lightText};
`

const Title = styled(Typography)`
  && {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.2rem;
  }
`

type PageHeaderProps = {
  icon: React.ReactElement<SvgIconProps>
  title: string
  sideComponent?: React.ReactElement<any>
}

const PageHeader: React.FC<PageHeaderProps> = ({
  icon,
  title,
  sideComponent
}) => {
  return (
    <Container>
      <TitleContainer>
        {icon}
        <Title variant="h1">{title}</Title>
      </TitleContainer>
      {sideComponent}
    </Container>
  )
}

export default PageHeader
