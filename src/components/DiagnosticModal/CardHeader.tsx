import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import { PracticeType } from '../../types/PracticeType'

const Container = styled(Box)`
  padding: 0.5rem 0;
`

type CardHeaderProps = {
  className?: string
  index: number
  practice: PracticeType
}

const CardHeader: React.FC<CardHeaderProps> = ({
  practice,
  index,
  className
}) => {
  return (
    <Container className={className}>
      <Typography variant="caption">
        #{index + 1} - {practice?.name}
      </Typography>
    </Container>
  )
}

export default CardHeader
