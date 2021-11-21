import { Button, Card, Typography } from '@mui/material'
import styled, { withTheme } from 'styled-components'
import React from 'react'
import { AntipatternType } from '../../types/AntipatternType'
import { Box } from '@mui/system'

const Container = styled(Card)`
  width: 300px;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto 1fr auto;
  transform: scale(0.75);
  margin: 0 -16px;
  opacity: 0.5;
  transition: all 0.3s ease-in-out;
  user-select: none;

  &.current {
    transform: scale(1);
    margin: 0 16px;
    opacity: 1;

    &:first-child {
      margin-left: 0;
    }
  }
`

const Buttons = withTheme(styled(Box)`
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  margin: 0 -2rem -1.5rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.lightBackground};
`)

type AntipatternCardProps = {
  className: string
  index: number
  answer: boolean | null
  handleOnAnswer: (id: string, answer: boolean) => void
} & AntipatternType

const AntipatternCard: React.FC<AntipatternCardProps> = ({
  id,
  identificationStrategy,
  index,
  answer,
  handleOnAnswer,
  className
}) => {
  const onAnswer = (answer: boolean) => {
    handleOnAnswer(id, answer)
  }

  return (
    <Container className={className}>
      <Typography variant="caption">#{index + 1}</Typography>
      <Typography variant="body1">{identificationStrategy}</Typography>
      <Buttons>
        <Button
          variant={answer === true ? 'outlined' : 'text'}
          onClick={() => onAnswer(true)}
        >
          Sim
        </Button>
        <Button
          variant={answer === false ? 'outlined' : 'text'}
          onClick={() => onAnswer(false)}
        >
          Não
        </Button>
      </Buttons>
    </Container>
  )
}

export default AntipatternCard
