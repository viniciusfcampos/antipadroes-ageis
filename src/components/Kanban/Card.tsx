import { Card as MuiCard, Divider, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { AntipatternAnswerType } from '../../types/AntipatternAnswerType'
import { Draggable } from 'react-beautiful-dnd'

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
  id,
  practice,
  name,
  eliminationStrategy
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Typography variant="caption">
            #{index + 1} - {practice?.name}
          </Typography>
          <Divider />
          <Name>{name}</Name>
          <Action>{eliminationStrategy}</Action>
        </Container>
      )}
    </Draggable>
  )
}

export default Card
