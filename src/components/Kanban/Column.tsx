import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled, { withTheme } from 'styled-components'
import { AntipatternAnswerType } from '../../types/AntipatternAnswerType'
import Card from './Card'
import { Droppable } from 'react-beautiful-dnd'

const ColumnWrapper = withTheme(styled(Box)`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 1fr;
`)

const ColumnBody = styled(Box)`
  border-radius: 8px;
  overflow: auto;
  padding: 1rem;
`

const Header = withTheme(styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  .MuiTypography-root {
    font-size: 1rem;
    margin: 0;
  }
`)

type ColumnProps = {
  className?: string
  id: string
  title: string
  items: AntipatternAnswerType[]
}

const Column: React.FC<ColumnProps> = ({ id, title, items, className }) => {
  return (
    <ColumnWrapper className={className}>
      <Header>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="caption">{items.length}</Typography>
      </Header>
      <Droppable droppableId={id}>
        {provided => (
          <ColumnBody ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((i, index) => (
              <Card key={i.id} index={index} {...i} />
            ))}
            {provided.placeholder}
          </ColumnBody>
        )}
      </Droppable>
    </ColumnWrapper>
  )
}

export default Column
