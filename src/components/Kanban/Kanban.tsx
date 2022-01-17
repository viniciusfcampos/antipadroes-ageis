import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AntipatternAnswerType } from '../../types/AntipatternAnswerType'
import { Status } from '../../utils/enums/Status'
import Column from './Column'
import { DragDropContext } from 'react-beautiful-dnd'
import clsx from 'clsx'
import { useMediaQuery, useTheme } from '@mui/material'

const Container = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, minmax(240px, 1fr));
  grid-gap: 0.5rem;
  overflow-x: auto;
  height: 70vh;
  width: 100%;
  
  &.small {
    width: 90vw;
  }
`

type KanbanProps = {
  className?: string
  antipatterns: AntipatternAnswerType[]
  onUpdate: (antipatterns: AntipatternAnswerType[]) => void
}

const Kanban: React.FC<KanbanProps> = ({
  antipatterns,
  onUpdate,
  className
}) => {
  const theme = useTheme()

  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const [columns, setColumns] = useState([])

  useEffect(() => {
    const list = antipatterns?.filter(a => a.useful).map(a => ({ ...a })) || []
    setColumns(createColumns(list))
  }, [antipatterns])

  const createColumns = list => {
    const createColumn = (status, title) => {
      const items = list.filter(a => a.status === status)

      items.sort((a, b) => (a.order > b.order ? 1 : -1))

      items.forEach((i, index) => {
        if (i.order === null) i.order = index
      })

      return {
        id: status.toString(),
        title,
        items
      }
    }

    return [
      createColumn(Status.backlog, 'Backlog'),
      createColumn(Status.prioritazed, 'Priorizados'),
      createColumn(Status.doing, 'Em andamento'),
      createColumn(Status.done, 'Concluídos')
    ]
  }

  const handleOnDragEnd = result => {
    const { source, destination } = result

    const sourceId = source.droppableId

    const destinationId = destination.droppableId

    if (!destination) return

    if (destinationId === sourceId && destination.index === source.index) return

    const sourceColumn = columns.find(c => c.id === sourceId)
    const removedItem = sourceColumn.items.splice(source.index, 1)[0]
    sourceColumn.items.forEach((i, index) => (i.order = index))

    removedItem.status = +destinationId

    const destinationColumn = columns.find(c => c.id === destinationId)
    destinationColumn.items.splice(destination.index, 0, removedItem)
    destinationColumn.items.forEach((i, index) => (i.order = index))

    const list = columns.reduce(
      (newList, column) => [...newList, ...column.items],
      []
    )

    setColumns(createColumns(list))
    onUpdate(list)
  }

  if (!antipatterns) return null

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Container className={clsx(className, { small: smallScreen })}>
        {columns.map(c => (
          <Column key={c.id} {...c} />
        ))}
      </Container>
    </DragDropContext>
  )
}

export default Kanban
