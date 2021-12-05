import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import styled, { withTheme } from 'styled-components'
import { AntipatternType } from '../types/AntipatternType'

const Container = withTheme(styled(Box)`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.lightBackground};
`)

const Fields = styled(Box)`
  display: grid;
  justify-content: stretch;
  align-items: stretch;
  grid-gap: 0.5rem;
  padding: 0.5rem;
`

const Info = withTheme(styled(Box)`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem 0.5rem 1.5rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.darkBackground};
`)

const AntipatternNumber = styled(Typography)`
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
`

const IdealAnswer = styled(FormControl)`
  padding: 0 12px;

  .MuiFormLabel-root {
    transform: scale(0.75);
    transform-origin: left;
  }

  .MuiFormGroup-root {
    display: grid;
    grid-auto-flow: column;
    justify-items: start;
  }
`

type AntipatternFormProps = AntipatternType & {
  index: number
  onRemoved: (id: string) => void
  updateField: (antipatternId: string, field: string, value: string) => void
}

const AntipatternForm: React.FC<AntipatternFormProps> = ({
  id,
  name,
  description,
  identificationStrategy,
  eliminationStrategy,
  idealAnswer,
  index,
  onRemoved,
  updateField
}) => {
  const [antipattern, setAntipattern] = useState<AntipatternType>({
    id,
    name,
    description,
    identificationStrategy,
    eliminationStrategy,
    idealAnswer
  })

  const onChange = (field, value) => {
    setAntipattern({ ...antipattern, [field]: value })
  }

  const onBlur = (field, value) => {
    updateField(id, field, value)
  }

  const onRadioChange = (field, value) => {
    onChange(field, value)
    onBlur(field, value)
  }

  return (
    <Container>
      <Info>
        <AntipatternNumber variant="caption">
          Antipadrão #{index}
        </AntipatternNumber>
        <Button color="error" size="small" onClick={() => onRemoved(id)}>
          Deletar
        </Button>
      </Info>
      <Fields>
        <TextField
          label="Nome"
          name="name"
          value={antipattern.name}
          onChange={({ target: { value } }) => onChange('name', value)}
          onBlur={({ target: { value } }) => onBlur('name', value)}
          variant="filled"
          multiline
          maxRows={2}
        />
        <TextField
          label="Descrição"
          name="description"
          value={antipattern.description}
          onChange={({ target: { value } }) => onChange('description', value)}
          onBlur={({ target: { value } }) => onBlur('description', value)}
          variant="filled"
          multiline
          minRows={2}
        />
        <TextField
          label="Estratégia de Identificação"
          name="identificationStrategy"
          value={antipattern.identificationStrategy}
          onChange={({ target: { value } }) =>
            onChange('identificationStrategy', value)
          }
          onBlur={({ target: { value } }) =>
            onBlur('identificationStrategy', value)
          }
          variant="filled"
          multiline
          minRows={2}
        />

        <IdealAnswer>
          <FormLabel>Resposta Ideal</FormLabel>
          <RadioGroup
            name="idealAnswer"
            value={antipattern.idealAnswer}
            onChange={({ target: { value } }) =>
              onRadioChange('idealAnswer', value)
            }
          >
            <FormControlLabel value={true} control={<Radio />} label="Sim" />
            <FormControlLabel value={false} control={<Radio />} label="Não" />
          </RadioGroup>
        </IdealAnswer>

        <TextField
          label="Estratégia de Eliminação"
          name="eliminationStrategy"
          value={antipattern.eliminationStrategy}
          onChange={({ target: { value } }) =>
            onChange('eliminationStrategy', value)
          }
          onBlur={({ target: { value } }) =>
            onBlur('eliminationStrategy', value)
          }
          variant="filled"
          multiline
          rows={5}
        />
      </Fields>
    </Container>
  )
}

export default AntipatternForm
