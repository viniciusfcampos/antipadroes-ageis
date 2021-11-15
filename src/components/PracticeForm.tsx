import { ExpandMoreRounded } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Input,
  TextField,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import clsx from 'clsx'
import React, { useState } from 'react'
import styled from 'styled-components'
import { PracticesService } from '../services/PracticesService'
import AntipatternForm from './AntipatternForm'

const Container = styled(Box)`
  display: grid;
  justify-content: start;
  align-items: start;
  grid-gap: 1rem;
`

const NameContainer = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;
`

const Name = styled(Typography)`
  &.gray {
    color: lightgray;
  }
`

const Antipatterns = styled(Box)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
`

type PracticeFormProps = {
  id: string
  name: string
  onPracticeDeleted: (id: string) => void
}

const PracticeForm: React.FC<PracticeFormProps> = ({
  id,
  name,
  onPracticeDeleted
}) => {
  const [practiceName, setPracticeName] = useState<string>(name)

  const savePracticeName = ({ target: { value } }) => {
    PracticesService.updatePracticeName({ id, name: value })
    setPracticeName(value)
  }

  const deletePractice = () => {
    PracticesService.removePractice({ id }).then(() => onPracticeDeleted(id))
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreRounded />}>
        <Name variant="h6" className={clsx({ gray: !practiceName })}>
          {practiceName || 'Nova prática'}
        </Name>
      </AccordionSummary>
      <AccordionDetails>
        <Container>
          <NameContainer>
            <TextField
              label="Nome da prática"
              name="name"
              variant="filled"
              value={practiceName}
              onChange={({ target: { value } }) => setPracticeName(value)}
              onBlur={savePracticeName}
            />
            <Button color="error" size="small" onClick={deletePractice}>
              Deletar
            </Button>
          </NameContainer>
          <Antipatterns>
            <AntipatternForm index={1} />
            <AntipatternForm index={2} />
            <AntipatternForm index={3} />
          </Antipatterns>
        </Container>
      </AccordionDetails>
    </Accordion>
  )
}

export default PracticeForm
