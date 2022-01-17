import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import clsx from 'clsx'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DiagnosticService } from '../../services/DiagnosticService'
import { AntipatternAnswerType } from '../../types/AntipatternAnswerType'
import { TeamType } from '../../types/TeamType'
import Carousel from '../Carousel'
import FinalCard from './FinalCard'
import ResultCard from './ResultCard'

const Container = styled(Box)`
  height: 100%;
  display: grid;
  align-items: center;
  align-content: center;
  justify-items: center;
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
  max-width: 580px;
  padding: 0 2rem;

  .MuiTypography-root {
    color: white;
    display: block;
  }
`

export type ResultsTabProps = Partial<{
  team: TeamType
  teamAntipatterns: AntipatternAnswerType[]
}>

const ResultsTab: React.FC<ResultsTabProps> = ({ team, teamAntipatterns }) => {
  const theme = useTheme()

  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const router = useRouter()

  const [position, setPosition] = useState<number>(0)

  const [antipatterns, setAntipatterns] = useState<AntipatternAnswerType[]>([
    ...teamAntipatterns
  ])

  useEffect(() => setAntipatterns([...teamAntipatterns]), [teamAntipatterns])

  const handleOnAnswer = (antipatternId, answer) => {
    const antipatternsList = antipatterns.map(i => {
      if (i.id === antipatternId) return { ...i, useful: answer }
      else return { ...i }
    })

    setAntipatterns(antipatternsList)

    changePosition(1)
  }

  const changePosition = step => {
    const nextPosition = step + position

    if (nextPosition >= 0 && nextPosition <= antipatterns.length)
      setPosition(nextPosition)
  }

  const handleOnFinish = async () => {
    await DiagnosticService.createDiagnostic(team, antipatterns)

    router.push(`diagnostic-result?teamId=${team.id}`)
  }

  return (
    <Container className={clsx({ small: smallScreen })}>
      <Header>
        <Typography variant="h4">Resultado</Typography>
        <Typography variant="caption">
          Veja abaixo os antipadrões que possivelmente ocorrem em seu time e
          formas de eliminá-lo. Avalie se você considera que as sugestões abaixo
          podem ser úteis para seu contexto ou não.
        </Typography>
      </Header>
      <Carousel position={position} handleChangePosition={changePosition}>
        {antipatterns.map((a, i) => (
          <ResultCard {...a} index={i} handleOnAnswer={handleOnAnswer} />
        ))}
        <FinalCard
          message="Agora você pode acompanhar o progresso das ações mapeadas por meio de um Kanban."
          action="Salvar e Acessar Kanban"
          color="success"
          onFinish={handleOnFinish}
        />
      </Carousel>
    </Container>
  )
}

export default ResultsTab
