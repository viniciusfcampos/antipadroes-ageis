import { IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
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
  cursor: pointer;
`

type DiagnosticItemProps = {
  className?: string,
  onDelete: () => void
} & TeamType

const DiagnosticItem: React.FC<DiagnosticItemProps> = ({
  id,
  name,
  description,
  antipatterns,
  onDelete,
  className
}) => {
  const [contextMenu, setContextMenu] = useState(null);

  const router = useRouter()

  const total = antipatterns.length

  const totalUseful = antipatterns.filter(a => a.useful).length

  const onRedirect = () => router.push(`/diagnostic-result?teamId=${id}`)

  const handleContextMenu = (event) => {
    event.preventDefault()

    setContextMenu(
      contextMenu === null
        ? {
          mouseX: event.clientX - 2,
          mouseY: event.clientY - 4,
        }
        : null,
    )
  }

  const handleClose = () => setContextMenu(null)

  const handleOnDelete = () => {
    onDelete()
    handleClose()
  }

  return (
    <Container onContextMenu={handleContextMenu} className={className}>
      <Identifier onClick={onRedirect}>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="caption">{description}</Typography>
      </Identifier>
      <DashboardNumber number={totalUseful} total={total} />
      <MiniKanban antipatterns={antipatterns} />
      <ContinueIcon />
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem color='' onClick={handleOnDelete}>Delete</MenuItem>
      </Menu>
    </Container>

  )
}

export default DiagnosticItem
