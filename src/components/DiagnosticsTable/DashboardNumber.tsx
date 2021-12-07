import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled, { withTheme } from 'styled-components'

const Container = withTheme(styled(Box)`
  display: grid;
  grid-gap: 0.25rem;

  .MuiTypography-root {
    margin: 0;
    line-height: 1;
  }
`)

const Numbers = styled(Box)`
  display: grid;
  grid-template-columns: 1fr auto;
  align-content: end;
  align-items: end;
  justify-items: end;
`

type DashboardNumberProps = {
  className?: string
  number: number
  total: number
}

const DashboardNumber: React.FC<DashboardNumberProps> = ({
  number,
  total,
  className
}) => {
  return (
    <Container className={className}>
      <Numbers>
        <Typography variant="body1">{number} </Typography>
        <Typography variant="caption">/{total}</Typography>
      </Numbers>
    </Container>
  )
}

export default DashboardNumber
