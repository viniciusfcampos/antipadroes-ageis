import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DiagnosticService } from '../../services/DiagnosticService'
import { AntipatternAnswerType } from '../../types/AntipatternAnswerType'
import { AntipatternType } from '../../types/AntipatternType'
import { PracticeType } from '../../types/PracticeType'
import { TeamType } from '../../types/TeamType'
import Carousel from '../Carousel'
import FinalCard from './FinalCard'
import QuestionCard from './QuestionCard'

const Container = styled(Box)`
  height: 100%;
  display: grid;
  align-items: center;
  align-content: center;
  justify-items: center;
  overflow: hidden;
  grid-gap: 4rem;

  &.small {
    grid-gap: 2rem;
  }

  .MuiIconButton-root {
    .MuiSvgIcon-root {
      fill: white;
    }
  }
`

const Header = styled(Box)`
  text-align: center;
  user-select: none;
  padding: 0 2rem;
  height: 80px;

  .MuiTypography-root {
    color: white;
    display: block;
  }
`

export type DiagnosticTabProps = Partial<{
  team: TeamType
  practices: PracticeType[]
  onFinish: (indentifiedAntipatterns: AntipatternType[]) => void
}>

const DiagnosticTab: React.FC<DiagnosticTabProps> = ({
  team,
  practices,
  onFinish
}) => {
  const theme = useTheme()

  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const [position, setPosition] = useState<number>(0)

  const [items, setItems] = useState<AntipatternAnswerType[]>([])

  useEffect(() => {
    setPosition(0)

    if (practices) setItems(buildItems())
    else setItems([])
  }, [team, practices])

  const buildItems = () => {
    const itemsList = []

    practices.forEach(practice => {
      practice.antipatterns.forEach(antipattern => {
        itemsList.push({ ...antipattern, practice, answer: null })
      })
    })

    return itemsList
  }

  const handleOnAnswer = (antipatternId, answer) => {
    const itemsList = items.map(i => {
      if (i.id === antipatternId) return { ...i, answer }
      else return { ...i }
    })

    setItems(itemsList)

    changePosition(1)
  }

  const changePosition = step => {
    const nextPosition = step + position

    if (nextPosition >= 0 && nextPosition <= items.length)
      setPosition(nextPosition)
  }

  const handleOnFinish = async () => {
    const identifiedAntipatterns = await DiagnosticService.createDiagnostic(
      team,
      items
    )

    onFinish(identifiedAntipatterns)
  }

  return (
    <Container className={clsx({ small: smallScreen })}>
      <Header>
        {items[position] && (
          <>
            <Typography variant="h4">
              {items[position]?.practice.name}
            </Typography>
            <Typography variant="caption">
              {items[position]?.practice.antipatterns.length} perguntas
            </Typography>
          </>
        )}
      </Header>
      <Carousel position={position} handleChangePosition={changePosition}>
        {items.map((item, i) => (
          <QuestionCard
            {...item}
            index={i}
            answer={item.answer}
            handleOnAnswer={handleOnAnswer}
          />
        ))}
        <FinalCard
          message="Deseja finalizar o diagnóstico?"
          action="Finalizar"
          onFinish={handleOnFinish}
        />
      </Carousel>
    </Container>
  )
}

export default DiagnosticTab
