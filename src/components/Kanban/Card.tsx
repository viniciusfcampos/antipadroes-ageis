import { Card as MuiCard, Divider, Tooltip, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { AntipatternAnswerType } from '../../types/AntipatternAnswerType'
import { Draggable } from 'react-beautiful-dnd'
import { Box } from '@mui/system'
import { InfoOutlined, InfoRounded } from '@mui/icons-material'

const Container = styled(MuiCard)`
  padding: 1rem;
  margin-bottom: 1rem;
`

const Header = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;

  .MuiSvgIcon-root {
    height: 16px;
    color: gray;
    cursor: default;
  }
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
  description,
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
          <Header>
            <Typography variant="caption">
              #{index + 1} - {practice?.name}
            </Typography>
            <Tooltip title={description}>
              <InfoOutlined />
            </Tooltip>
          </Header>
          <Divider />
          <Name>{name}</Name>
          <Action>{eliminationStrategy}</Action>
        </Container>
      )}
    </Draggable>
  )
}

export default Card
