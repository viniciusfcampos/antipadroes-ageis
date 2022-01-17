import { SearchOffRounded } from '@mui/icons-material'
import { Input, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { withTheme } from 'styled-components'
import { TeamType } from '../../types/TeamType'
import SearchField from '../SearchField'
import DiagnosticItem from './DiagnosticItem'
import styled from 'styled-components'
import clsx from 'clsx'

const Table = styled(Box)`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  overflow: hidden;
`

const TableHeader = withTheme(styled(Box)`
  display: grid;
  grid-template-columns: 5fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;
  padding: 1rem 0 1rem calc(2rem - 12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};

  .MuiTypography-root {
    text-align: center;
    line-height: 1.5;
  }

  &.small {
    grid-template-columns: 1fr;
    padding: 0.75rem 1rem;
    grid-gap: 0;

    .MuiTypography-root {
      display: none;
    }
  }
`)

const TableBody = styled(Box)`
  overflow: auto;
`

type DiagnosticsTableProps = {
  className?: string
  diagnostics: TeamType[]
  onDelete: (teamId) => void
}

const DiagnosticsTable: React.FC<DiagnosticsTableProps> = ({
  className,
  diagnostics,
  onDelete
}) => {
  const theme = useTheme()

  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const [filter, setFilter] = useState<string>(null)

  const [filteredDiagnostics, setFilteredDiagnostics] = useState<TeamType[]>([])

  useEffect(() => {
    onFilter(filter)
  }, [diagnostics])

  const onFilter = filterString => {
    setFilter(filterString)

    filterString = filterString?.trim()

    if (!filterString) {
      setFilteredDiagnostics([...diagnostics])
      return
    }

    const filteredList = diagnostics.filter(d =>
      d.name.toLowerCase().includes(filterString)
    )
    setFilteredDiagnostics(filteredList)
  }

  return (
    <Table>
      <TableHeader className={clsx({ small: smallScreen })}>
        <SearchField
          placeholder="Time"
          value={filter}
          onChange={({ target: { value } }) => onFilter(value)}
        />
        <Typography variant="caption">Sugestões Úteis</Typography>
        <Typography variant="caption">Status</Typography>
        <Box />
      </TableHeader>
      <TableBody className={className}>
        {filteredDiagnostics.map(d => (
          <DiagnosticItem key={d.id} {...d} onDelete={() => onDelete(d.id)} />
        ))}
      </TableBody>
    </Table>
  )
}

export default DiagnosticsTable
