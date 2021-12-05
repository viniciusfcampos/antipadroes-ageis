import CancelIcon from '@mui/icons-material/Cancel'
import { IconButton, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DiagnosticService } from '../../services/DiagnosticService'
import { AntipatternAnswerType } from '../../types/AntipatternAnswerType'
import { AntipatternType } from '../../types/AntipatternType'
import { PracticeType } from '../../types/PracticeType'
import { TeamType } from '../../types/TeamType'
import Carousel from '../Carousel'
import AntipatternCard from './QuestionCard'
import FinalCard from './FinalCard'
import ResultCard from './ResultCard'

const Container = styled(Box)`
  height: 100%;
  display: grid;
  align-items: center;
  align-content: center;
  justify-items: center;
  grid-gap: 4rem;

  .MuiIconButton-root {
    .MuiSvgIcon-root {
      fill: white;
    }
  }
`

const Header = styled(Box)`
  text-align: center;
  user-select: none;
  height: 100px;
  max-width: 580px;

  .MuiTypography-root {
    color: white;
  }
`

export type ResultsTabProps = Partial<{
  team: TeamType
  teamAntipatterns: AntipatternAnswerType[]
}>

const ResultsTab: React.FC<ResultsTabProps> = ({ team, teamAntipatterns }) => {
  const [position, setPosition] = useState<number>(0)

  const handleOnAnswer = (antipatternId, answer) => {
    changePosition(1)
  }

  const changePosition = step => {
    const nextPosition = step + position

    if (nextPosition >= 0 && nextPosition <= teamAntipatterns.length)
      setPosition(nextPosition)
  }

  const handleOnFinish = async () => {}

  return (
    <Container>
      <Header>
        <Typography variant="h4">Resultado</Typography>
        <Typography variant="caption">
          Veja abaixo os antipadrões que possivelmente ocorrem em seu time e
          formas de eliminá-lo. Avalie se você considera que as sugestões abaixo
          podem ser úteis para seu contexto ou não.
        </Typography>
      </Header>
      <Carousel position={position} handleChangePosition={changePosition}>
        {teamAntipatterns.map((a, i) => (
          <ResultCard {...a} index={i} handleOnAnswer={handleOnAnswer} />
        ))}
        <FinalCard
          message="Agora você pode acompanhar o progresso das ações mapeadas por meio do nosso Kanban."
          action="Acessar Kanban"
          color="success"
          onFinish={handleOnFinish}
        />
      </Carousel>
    </Container>
  )
}

export default ResultsTab
