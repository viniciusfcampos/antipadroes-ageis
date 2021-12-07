import { ArrowForwardIosRounded } from '@mui/icons-material'
import { Box } from '@mui/system'
import React from 'react'
import styled, { withTheme } from 'styled-components'

const Container = withTheme(styled(Box)`
  border-radius: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.lightBackground};

  .MuiSvgIcon-root {
    font-size: 0.75rem;
  }
`)

type ContinueIconProps = {
  className?: string
}

const ContinueIcon: React.FC<ContinueIconProps> = ({ className }) => {
  return (
    <Container className={className}>
      <ArrowForwardIosRounded fontSize="small" />
    </Container>
  )
}

export default ContinueIcon
