import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled, { withTheme } from 'styled-components'
import { AntipatternAnswerType } from '../types/AntipatternAnswerType'
import { Status } from '../utils/enums/Status'

const Container = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  height: 80vh;
  width: 100%;
  overflow: hidden;
`

const ColumnWrapper = withTheme(styled(Box)`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  height: 100%;
  overflow: hidden;
`)

const Column = styled(Box)`
  border-radius: 8px;
  overflow: auto;
  display: grid;
  grid-gap: 1rem;
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

type KanbanProps = {
  className?: string
  antipatterns: AntipatternAnswerType[]
}

const Kanban: React.FC<KanbanProps> = ({ antipatterns, className }) => {
  const useful = antipatterns?.filter(a => a.useful) || []

  const statuses = [
    Status.backlog,
    Status.prioritazed,
    Status.doing,
    Status.done
  ]

  const byStatus = {
    [Status.backlog]: {
      label: 'Backlog',
      list: useful.filter(a => a.status === Status.backlog)
    },
    [Status.prioritazed]: {
      label: 'Priorizados',
      list: useful.filter(a => a.status === Status.prioritazed)
    },
    [Status.doing]: {
      label: 'Em andamento',
      list: useful.filter(a => a.status === Status.doing)
    },
    [Status.done]: {
      label: 'Concluídos',
      list: useful.filter(a => a.status === Status.done)
    }
  }

  return (
    <Container className={className}>
      {statuses.map(s => (
        <ColumnWrapper>
          <Header>
            <Typography variant="h6">{byStatus[s].label}</Typography>
            <Typography variant="caption">{byStatus[s].list.length}</Typography>
          </Header>
          <Column>
            {byStatus[s].list.map(a => (
              <Card key={a.id}>{a.name}</Card>
            ))}
          </Column>
        </ColumnWrapper>
      ))}
    </Container>
  )
}

export default Kanban
