import { Avatar as MuiAvatar, Button, IconButton, Popover, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import styled, { withTheme } from 'styled-components'
import { useAuth } from '../contexts/AuthContext'
import theme from '../styles/theme'

const Avatar = styled(MuiAvatar)`
  text-transform: uppercase;
  cursor: pointer;
`

const PopoverContainer = styled(Box)`
  min-width: 300px;
`
const PopoverBody = styled(Box)`
  padding: 2rem;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  justify-content: start;
  align-items: center;
`

const PopoverFooter = withTheme(styled(Box)`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding: 0.5rem 1.75rem;
`)

const Title = styled(Typography)`
    font-weight: 500;
`

type UserAvatarProps = {
  onOpenSignIn: () => void
}

const UserAvatar: React.FC<UserAvatarProps> = ({ onOpenSignIn }) => {
  const { authenticated, user, signOut } = useAuth()

  if (!authenticated)
    return (
      <IconButton onClick={onOpenSignIn}>
        <MuiAvatar />
      </IconButton>
    )


  const [anchorEl, setAnchorEl] = useState(null)

  const handlePopoverOpen = event => setAnchorEl(event.currentTarget)

  const handlePopoverClose = () => setAnchorEl(null)

  const open = Boolean(anchorEl)

  return (<>
    <Avatar sx={{ bgcolor: theme.colors.primary }} onClick={handlePopoverOpen}>{user.email[0]}</Avatar>

    <Popover open={open} anchorEl={anchorEl} onClose={handlePopoverClose}>
      <PopoverContainer>
        <PopoverBody>
          <Avatar sx={{ bgcolor: theme.colors.primary }}>{user.email[0]}</Avatar>
          <Title>{user.email}</Title>
        </PopoverBody>

        <PopoverFooter>
          <Button size="small" onClick={signOut}>
            Sign out
          </Button>
        </PopoverFooter>
      </PopoverContainer>
    </Popover>
  </>)
}

export default UserAvatar
