import { AddCircleRounded, ExpandMoreRounded } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import clsx from 'clsx'
import React, { useState } from 'react'
import styled from 'styled-components'
import { PracticesService } from '../services/PracticesService'
import { AntipatternType } from '../types/AntipatternType'
import AntipatternForm from './AntipatternForm'

const Container = styled(Box)`
  display: grid;
  justify-content: stretch;
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
  grid-template-columns: 1fr 1fr;
`

const AddAntipattern = styled(Button)`
  min-height: 400px;
`

type PracticeFormProps = {
  id: string
  name: string
  antipatterns: AntipatternType[]
  onRemoved: (id: string) => void
}

const PracticeForm: React.FC<PracticeFormProps> = ({
  id,
  name,
  antipatterns,
  onRemoved
}) => {
  const [practiceName, setPracticeName] = useState<string>(name)

  const [antipatternsList, setAntipatternsList] = useState<AntipatternType[]>(
    antipatterns || []
  )

  const savePracticeName = ({ target: { value } }) => {
    PracticesService.updatePracticeName({ id, name: value })
    setPracticeName(value)
  }

  const removePractice = () => {
    PracticesService.removePractice({ id }).then(() => onRemoved(id))
  }

  const addAntipattern = () => {
    PracticesService.addAntipattern({ id }).then(antipatternId => {
      setAntipatternsList([
        ...antipatternsList,
        { id: antipatternId } as AntipatternType
      ])
    })
  }

  const handleAntipatternRemoved = antipatternId => {
    PracticesService.removeAntipattern({ id, antipatternId }).then(() => {
      const filteredAntipatternsList = antipatternsList.filter(
        a => a.id !== antipatternId
      )

      setAntipatternsList(filteredAntipatternsList)
    })
  }

  const handleUpdateAntipatternField = (antipatternId, field, value) => {
    PracticesService.updateAntipatternField({ id, antipatternId, field, value })
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
            <Button color="error" variant="outlined" onClick={removePractice}>
              Deletar
            </Button>
          </NameContainer>
          <Antipatterns>
            {antipatternsList?.map((a, i) => (
              <AntipatternForm
                key={a.id}
                {...a}
                index={i + 1}
                onRemoved={handleAntipatternRemoved}
                updateField={handleUpdateAntipatternField}
              />
            ))}
            <AddAntipattern
              variant="outlined"
              startIcon={<AddCircleRounded />}
              onClick={addAntipattern}
            >
              Adicionar Antipadrão
            </AddAntipattern>
          </Antipatterns>
        </Container>
      </AccordionDetails>
    </Accordion>
  )
}

export default PracticeForm
