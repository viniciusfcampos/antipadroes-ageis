import { Button, Card, Typography } from '@mui/material'
import styled, { withTheme } from 'styled-components'
import React, { useState } from 'react'
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
  grid-gap: .5rem;
  grid-auto-flow: column;
  margin: 0 -2rem -1.5rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.lightBackground};

  .MuiButton-outlined {
    padding-right: 12px;
    padding-left: 12px;
  }
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
  handleOnAnswer,
  idealAnswer,
  className
}) => {

  const [optionOutlined, setOptionOutlined] = useState<string | null>(null)

  const onAnswer = (answer: string) => {
    let answerValue = false;

    if (answer === 'true') answerValue = true
    else if (answer === 'sometimes') answerValue = !(idealAnswer === 'true')

    setOptionOutlined(answer)
    handleOnAnswer(id, answerValue)
  }

  const getVariant = (answer) => optionOutlined === answer ? 'outlined' : 'text'

  return (
    <Container className={className}>
      <CardHeader index={index} practice={practice} />
      <Typography variant="body1">{identificationStrategy}</Typography>
      <Buttons>
        <Button
          variant={getVariant('true')}
          onClick={() => onAnswer('true')}
        >
          Sim
        </Button>
        <Button
          variant={getVariant('sometimes')}
          onClick={() => onAnswer('sometimes')}
        >
          Ás vezes
        </Button>
        <Button
          variant={getVariant('false')}
          onClick={() => onAnswer('false')}
        >
          Não
        </Button>
      </Buttons>
    </Container>
  )
}

export default QuestionCard
