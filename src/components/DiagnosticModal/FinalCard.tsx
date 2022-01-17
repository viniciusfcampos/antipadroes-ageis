import { Button, Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'

const Container = styled(Card)`
  display: grid;
  grid-auto-rows: 1fr auto;
  width: 320px;
  grid-gap: 2rem;
`

const Message = styled(Box)`
  display: grid;
  align-content: center;
  justify-content: center;
  text-align: center;
  justify-items: center;
  grid-gap: 2rem;
`

const Check = styled(CheckCircleRoundedIcon)`
  width: 2rem;
  height: 2rem;
`

type FinalCardProps = {
  className?: string
  message: string
  action: string
  color?: 'primary' | 'success'
  onFinish: () => void
}

const FinalCard: React.FC<FinalCardProps> = ({
  message,
  action,
  color = 'primary',
  onFinish,
  className
}) => {
  return (
    <Container className={className}>
      <Message>
        <Check color={color} />
        <Typography>{message}</Typography>
      </Message>
      <Button onClick={onFinish} color={color} variant="contained">
        {action}
      </Button>
    </Container>
  )
}

export default FinalCard
