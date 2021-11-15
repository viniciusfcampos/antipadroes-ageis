import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled, { withTheme } from 'styled-components'

const Container = withTheme(styled(Box)`
  display: grid;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.lightBackground};
`)

const Fields = styled(Box)`
  display: grid;
  justify-content: start;
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

type AntipatternFormProps = {
  index: number
}

const AntipatternForm: React.FC<AntipatternFormProps> = ({ index }) => {
  return (
    <Container>
      <Fields>
        <TextField
          label="Nome"
          name="name"
          variant="filled"
          multiline
          rows={4}
        />
        <TextField
          label="Descrição"
          name="description"
          variant="filled"
          multiline
          rows={4}
        />
        <TextField
          label="Estratégia de Identificação"
          name="identificationStrategy"
          variant="filled"
          multiline
          rows={4}
        />
        <TextField
          label="Estratégia de Eliminação"
          name="eliminationStrategy"
          variant="filled"
          multiline
          rows={4}
        />
      </Fields>
      <Info>
        <AntipatternNumber variant="caption">
          Antipadrão #{index}
        </AntipatternNumber>
        <Button color="error" size="small">
          Deletar
        </Button>
      </Info>
    </Container>
  )
}

export default AntipatternForm
