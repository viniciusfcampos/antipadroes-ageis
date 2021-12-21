import { Tooltip } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled, { withTheme } from 'styled-components'
import theme from '../styles/theme'
import { AntipatternAnswerType } from '../types/AntipatternAnswerType'
import { Status } from '../utils/enums/Status'

const Container = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.25rem;
  height: 40px;
  width: 40px;
`

const ColumnWrapper = withTheme(styled(Box)`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.lightBackground};
`)

const Column = styled(Box)`
  border-radius: 4px;
`

type MiniKanbanProps = {
  className?: string
  antipatterns: AntipatternAnswerType[]
}

const MiniKanban: React.FC<MiniKanbanProps> = ({ antipatterns, className }) => {
  const useful = antipatterns.filter(a => a.useful)

  const statuses = [
    Status.backlog,
    Status.prioritazed,
    Status.doing,
    Status.done
  ]

  const labels = {
    [Status.backlog]: 'Itens no backlog: ',
    [Status.prioritazed]: 'Itens priorizados: ',
    [Status.doing]: 'Itens em andamento: ',
    [Status.done]: 'Itens concluídos: '
  }

  const total = useful.length

  let percentage = {}

  let totalByStatus: { [key: number]: number } = {}

  if (total > 0) {
    statuses.forEach(s => {
      totalByStatus[s] = useful.filter(a => a.status === s).length
      percentage[s] = (totalByStatus[s] / total) * 100
    })

    const maxTotal = Math.max(...Object.values(totalByStatus))

    statuses.forEach(s => {
      totalByStatus[s] = useful.filter(a => a.status === s).length
      percentage[s] = (totalByStatus[s] / maxTotal) * 100
    })
  }

  return (
    <Container className={className}>
      {statuses.map(s => (
        <Tooltip title={`${labels[s]} ${totalByStatus[s] || 0}`}>
          <ColumnWrapper>
            <Column
              style={{
                height: `${percentage[s] || 0}%`,
                backgroundColor: theme.colors.status[s]
              }}
            />
          </ColumnWrapper>
        </Tooltip>
      ))}
    </Container>
  )
}

export default MiniKanban
