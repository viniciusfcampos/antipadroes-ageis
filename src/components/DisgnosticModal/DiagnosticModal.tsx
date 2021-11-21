import { IconButton, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { PracticeType } from '../../types/PracticeType'
import { TeamType } from '../../types/TeamType'
import styled from 'styled-components'
import AntipatternCard from './AntipatternCard'
import clsx from 'clsx'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import CancelIcon from '@mui/icons-material/Cancel'

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

const Controls = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  width: 300px;
  user-select: none;

  .MuiIconButton-root.Mui-disabled {
    .MuiSvgIcon-root {
      opacity: 0.5;
    }
  }
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
    moveCarousel(1)
  }

  const moveCarousel = step => {
    const nextPosition = step + position
    if (nextPosition >= 0 && nextPosition < practice.antipatterns.length)
      setPosition(nextPosition)
  }

  const getCarouselPosition = () => {
    const translateDueToCard = -300 * 0.75 * position
    const translateDueToMargin = -48 * position
    return `translateX(${translateDueToCard + translateDueToMargin}px)`
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
        <Antipatterns style={{ transform: getCarouselPosition() }}>
          {practice?.antipatterns?.map((a, i) => (
            <AntipatternCard
              {...a}
              index={i}
              answer={answers[a.id]}
              handleOnAnswer={handleOnAnswer}
              className={clsx({
                current: position === i
              })}
            />
          ))}
        </Antipatterns>
        <Controls>
          <IconButton
            onClick={() => moveCarousel(-1)}
            disabled={position === 0}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton
            onClick={() => moveCarousel(1)}
            disabled={position === practice?.antipatterns?.length - 1}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Controls>
      </Container>
    </Modal>
  )
}

export default DiagnosticModal
