import CancelIcon from '@mui/icons-material/Cancel'
import { IconButton, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PracticeType } from '../../types/PracticeType'
import { TeamType } from '../../types/TeamType'
import Carousel from '../Carousel'
import AntipatternCard from './AntipatternCard'
import FinalCard from './FinalCard'

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
  color: white;
  user-select: none;
`

const CancelButton = styled(IconButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`

export type DiagnosticModalProps = Partial<{
  open: boolean
  team: TeamType
  practice: PracticeType
  handleClose: () => void
}>

const DiagnosticModal: React.FC<DiagnosticModalProps> = ({
  open,
  team,
  practice,
  handleClose
}) => {
  const [position, setPosition] = useState<number>(0)

  const [answers, setAnswers] = useState({})

  useEffect(() => {
    setPosition(0)

    if (practice) setAnswers(buildAnswers())
    else setAnswers({})
  }, [open, team, practice])

  const buildAnswers = () => {
    return practice.antipatterns.reduce(
      (map, a) => ({ ...map, [a.id]: null }),
      {}
    )
  }

  const handleOnAnswer = (antipatternId, answer) => {
    setAnswers({ ...answers, [antipatternId]: answer })
    changePosition(1)
  }

  const changePosition = step => {
    const nextPosition = step + position
    if (nextPosition >= 0 && nextPosition <= practice.antipatterns.length)
      setPosition(nextPosition)
  }

  const handleCancel = () => handleClose()

  const isComplete = () => !Object.values(answers).some(a => a === null)

  return (
    <Modal open={open}>
      <Container>
        <CancelButton onClick={handleCancel}>
          <CancelIcon />
        </CancelButton>
        <Header>
          <Typography variant="h4">{practice?.name}</Typography>
          <Typography variant="caption">{team?.name}</Typography>
        </Header>
        <Carousel position={position} handleChangePosition={changePosition}>
          {practice?.antipatterns?.map((a, i) => (
            <AntipatternCard
              {...a}
              index={i}
              answer={answers[a.id]}
              handleOnAnswer={handleOnAnswer}
            />
          ))}
          <FinalCard />
        </Carousel>
      </Container>
    </Modal>
  )
}

export default DiagnosticModal
