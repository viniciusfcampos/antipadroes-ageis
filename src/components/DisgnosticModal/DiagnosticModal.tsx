import { IconButton, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { PracticeType } from '../../types/PracticeType'
import { TeamType } from '../../types/TeamType'
import AntipatternCard from './AntipatternCard'
import clsx from 'clsx'
import CancelIcon from '@mui/icons-material/Cancel'
import styled from 'styled-components'
import Carousel from '../Carousel'

const Container = styled(Box)`
  height: 100%;
  display: grid;
  align-items: center;
  align-content: center;
  justify-items: center;
  grid-gap: 4rem;

  .MuiSvgIcon-root {
    fill: white;
  }
`

const Antipatterns = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  transition: all 0.3s ease-in-out;
  transform: translateX(0);
  padding-left: calc(50% - 150px);
  width: 100vw;
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
    setAnswers({})

    if (practice) {
      const answersMap = practice.antipatterns.reduce(
        (map, a) => ({ ...map, [a.id]: null }),
        {}
      )

      setAnswers(answersMap)
    }
  }, [open, team, practice])

  const handleOnAnswer = (antipatternId, answer) => {
    setAnswers({ ...answers, [antipatternId]: answer })
    changePosition(1)
  }

  const changePosition = step => {
    const nextPosition = step + position
    if (nextPosition >= 0 && nextPosition < practice.antipatterns.length)
      setPosition(nextPosition)
  }

  const handleCancel = () => {
    handleClose()
  }

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
        </Carousel>
      </Container>
    </Modal>
  )
}

export default DiagnosticModal
