import { Button, Card, Typography } from '@mui/material'
import styled, { withTheme } from 'styled-components'
import React from 'react'
import CardHeader from './CardHeader'
import { Box } from '@mui/system'
import { AntipatternAnswerType } from '../../types/AntipatternAnswerType'
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded'
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded'

const Container = styled(Card)`
  width: 300px;
  height: 540px;
  display: grid;
  grid-template-rows: auto auto 1fr auto;

  .MuiTypography-caption {
    margin-bottom: 1rem;
    color: gray;
  }
`

const Content = styled(Box)`
  overflow: auto;
  margin: 0 -2rem;
  padding: 0 2rem 2rem;

  .MuiTypography-caption {
    display: block;
  }
`

const Action = styled(Typography)`
  margin-top: 2rem;
  font-weight: 500;
`

const Buttons = withTheme(styled(Box)`
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  margin: 0 -2rem -1.5rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.lightBackground};
`)

type ResultCardProps = {
  className?: string
  index: number
  handleOnAnswer: (id: string, answer: boolean) => void
} & AntipatternAnswerType

const ResultCard: React.FC<ResultCardProps> = ({
  id,
  name,
  description,
  eliminationStrategy,
  practice,
  useful,
  index,
  handleOnAnswer,
  className
}) => {
  const onAnswer = (answer: boolean) => {
    handleOnAnswer(id, answer)
  }

  return (
    <Container className={className}>
      <CardHeader index={index} practice={practice} />
      <Typography variant="h6">{name}</Typography>
      <Content>
        <Typography variant="caption">{description}</Typography>
        <Action>Ação:</Action>
        <Typography variant="body2">{eliminationStrategy}</Typography>
      </Content>
      <Buttons>
        <Button
          startIcon={<ThumbUpAltRoundedIcon />}
          variant={useful === true ? 'outlined' : 'text'}
          onClick={() => onAnswer(true)}
        >
          Útil
        </Button>
        <Button
          startIcon={<ThumbDownAltRoundedIcon />}
          variant={useful === false ? 'outlined' : 'text'}
          onClick={() => onAnswer(false)}
        >
          Não
        </Button>
      </Buttons>
    </Container>
  )
}

export default ResultCard
