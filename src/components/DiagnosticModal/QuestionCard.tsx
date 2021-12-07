import { Button, Card, Typography } from '@mui/material'
import styled, { withTheme } from 'styled-components'
import React from 'react'
import { Box } from '@mui/system'
import { AntipatternAnswerType } from '../../types/AntipatternAnswerType'
import CardHeader from './CardHeader'

const Container = styled(Card)`
  width: 300px;
  height: 350px;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto 1fr auto;
`

const Buttons = withTheme(styled(Box)`
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  margin: 0 -2rem -1.5rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.lightBackground};
`)

type QuestionCardProps = {
  className?: string
  index: number
  answer: boolean | null
  handleOnAnswer: (id: string, answer: boolean) => void
} & AntipatternAnswerType

const QuestionCard: React.FC<QuestionCardProps> = ({
  id,
  identificationStrategy,
  practice,
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
      <CardHeader index={index} practice={practice} />
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

export default QuestionCard
