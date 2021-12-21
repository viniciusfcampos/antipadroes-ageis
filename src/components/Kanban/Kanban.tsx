import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AntipatternAnswerType } from '../../types/AntipatternAnswerType'
import { Status } from '../../utils/enums/Status'
import Column from './Column'

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
}

const Kanban: React.FC<KanbanProps> = ({ antipatterns, className }) => {
  const [columns, setColumns] = useState([])

  useEffect(() => {
    setColumns(createColumns())
  }, [antipatterns])

  const createColumns = () => {
    const useful = antipatterns?.filter(a => a.useful) || []

    return [
      {
        id: Status.backlog,
        title: 'Backlog',
        items: useful.filter(a => a.status === Status.backlog)
      },
      {
        id: Status.prioritazed,
        title: 'Priorizados',
        items: useful.filter(a => a.status === Status.prioritazed)
      },
      {
        id: Status.doing,
        title: 'Em andamento',
        items: useful.filter(a => a.status === Status.doing)
      },
      {
        id: Status.done,
        title: 'Concluídos',
        items: useful.filter(a => a.status === Status.done)
      }
    ]
  }

  return (
    <Container className={className}>
      {columns.map(c => (
        <Column key={c.id} {...c} />
      ))}
    </Container>
  )
}

export default Kanban
