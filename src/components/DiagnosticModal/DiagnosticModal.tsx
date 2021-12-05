import CancelIcon from '@mui/icons-material/Cancel'
import { IconButton, Modal } from '@mui/material'
import { Box } from '@mui/system'
import clsx from 'clsx'
import React, { useState } from 'react'
import styled from 'styled-components'
import { AntipatternType } from '../../types/AntipatternType'
import { PracticeType } from '../../types/PracticeType'
import { TeamType } from '../../types/TeamType'
import DiagnosticTab from './DiagnosticTab'
import ResultsTab from './ResultsTab'

const Container = styled(Box)`
  height: 100%;
  width: 100vw;
  grid-gap: 4rem;
  position: relative;

  .MuiIconButton-root {
    .MuiSvgIcon-root {
      fill: white;
    }
  }
`

const Tabs = styled(Box)`
  display: grid;
  grid-template-columns: 100vw 100vw;
  position: absolute;
  height: 100vh;
  left: 0;

  transition: left 0.3s ease-in-out;

  &.showResults {
    left: -100vw;
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
  practices: PracticeType[]
  handleClose: () => void
}>

const DiagnosticModal: React.FC<DiagnosticModalProps> = ({
  open,
  team,
  practices,
  handleClose
}) => {
  const [teamAntipatterns, setTeamAntipatterns] = useState<AntipatternType[]>(
    []
  )

  const handleCancel = () => handleClose()

  const handleFinish = identifiedAntipatterns => {
    setTeamAntipatterns(identifiedAntipatterns)
    console.log(identifiedAntipatterns)
  }

  return (
    <Modal open={open}>
      <Container>
        <CancelButton onClick={handleCancel}>
          <CancelIcon />
        </CancelButton>

        <Tabs className={clsx({ showResults: teamAntipatterns.length > 0 })}>
          <DiagnosticTab
            team={team}
            practices={practices}
            onFinish={handleFinish}
          />

          <ResultsTab team={team} teamAntipatterns={teamAntipatterns} />
        </Tabs>
      </Container>
    </Modal>
  )
}

export default DiagnosticModal
