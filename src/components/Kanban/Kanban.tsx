import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AntipatternAnswerType } from '../../types/AntipatternAnswerType'
import { Status } from '../../utils/enums/Status'
import Column from './Column'
import { DragDropContext } from 'react-beautiful-dnd'

const Container = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  height: 80vh;
  width: 100%;
  overflow: hidden;
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
    <DragDropContext
      // onDragStart={handleOnDragStart}
      // onDragUpdate={handleOnDragUpdate}
      onDragEnd={handleOnDragEnd}
    >
      <Container className={className}>
        {columns.map(c => (
          <Column key={c.id} {...c} />
        ))}
      </Container>
    </DragDropContext>
  )
}

export default Kanban
