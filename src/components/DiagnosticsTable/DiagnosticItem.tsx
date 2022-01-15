import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled, { withTheme } from 'styled-components'
import { TeamType } from '../../types/TeamType'
import { Status } from '../../utils/enums/Status'
import ContinueIcon from './ContinueIcon'
import DashboardNumber from './DashboardNumber'
import MiniKanban from '../MiniKanban'
import { useRouter } from 'next/dist/client/router'

const Container = withTheme(styled(Box)`
  display: grid;
  grid-template-columns: 5fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
  padding: 0.75rem 0 0.75rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  .MuiTypography-root {
    margin: 0;
    display: block;
  }
`)

const Identifier = styled(Box)`
  justify-self: start;
`

type DiagnosticItemProps = {
  className?: string
} & TeamType

const DiagnosticItem: React.FC<DiagnosticItemProps> = ({
  id,
  name,
  description,
  antipatterns,
  className
}) => {
  const router = useRouter()

  const total = antipatterns.length

  const totalUseful = antipatterns.filter(a => a.useful).length

  const onRedirect = () => router.push(`/diagnostic-result?teamId=${id}`)

  return (
    <Container className={className} onClick={onRedirect}>
      <Identifier>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="caption">{description}</Typography>
      </Identifier>
      <DashboardNumber number={totalUseful} total={total} />
      <MiniKanban antipatterns={antipatterns} />
      <ContinueIcon />
    </Container>
  )
}

export default DiagnosticItem
