import { Card as MuiCard, Divider, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { AntipatternAnswerType } from '../../types/AntipatternAnswerType'

const Container = styled(MuiCard)`
  padding: 1rem;
  margin-bottom: 1rem;
`

const Name = styled(Typography)`
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.5rem 0;
`

const Action = styled(Typography)`
  font-size: 0.8rem;
`

type CardProps = AntipatternAnswerType & {
  index: number
}

const Card: React.FC<CardProps> = ({
  index,
  practice,
  name,
  eliminationStrategy
}) => {
  return (
    <Container>
      <Typography variant="caption">
        #{index + 1} - {practice?.name}
      </Typography>
      <Divider />
      <Name>{name}</Name>
      <Action>{eliminationStrategy}</Action>
    </Container>
  )
}

export default Card
