import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import {
  Alert,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Snackbar,
  TextField,
  Typography
} from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import { Box } from '@mui/system'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import DiagnosticModal, {
  DiagnosticModalProps
} from '../components/DiagnosticModal/DiagnosticModal'
import PageHeader from '../components/PageHeader'
import { PracticesService } from '../services/PracticesService'
import { TeamsService } from '../services/TeamsService'
import { AlertType } from '../types/AlertType'
import { PracticeType } from '../types/PracticeType'
import { TeamType } from '../types/TeamType'

const Form = styled(Box)`
  display: grid;
  grid-gap: 1rem;
  margin: 4rem auto;
  max-width: 400px;
`

const Practices = styled(Box)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 4rem;
`

type SelectedPracticesType =
  | {}
  | {
      id: string
      selected: boolean
    }

const NewDiagnostic: React.FC = () => {
  const [practices, setPractices] = useState<PracticeType[]>([])

  const [selectedPractices, setSelectedPractices] = useState<
    SelectedPracticesType
  >(null as SelectedPracticesType)

  const [team, setTeam] = useState<TeamType>({} as TeamType)

  const [alert, setAlert] = useState<AlertType>({} as AlertType)

  const [diagnosticModalProps, setDiagnosticModalProps] = useState<
    DiagnosticModalProps
  >({ open: false })

  useEffect(() => {
    PracticesService.getPractices().then(practicesList => {
      setPractices(practicesList)

      resetSelectedPractices(practicesList)
    })
  }, [])

  const resetSelectedPractices = practicesList => {
    const practicesMap = practicesList.reduce((map, p) => {
      map[p.id] = true
      return map
    }, {})

    setSelectedPractices(practicesMap)
  }

  const handleSelectPractice = ({ target: { name, checked } }) => {
    const updatedSelectedPractices = {
      ...selectedPractices,
      [name]: checked
    }

    setSelectedPractices(updatedSelectedPractices)
  }

  const handleChangeTeam = ({ target: { name, value } }) => {
    setTeam({ ...team, [name]: value })
  }

  const isValid = () => {
    const isNullOrEmpty = text => text?.trim().length === 0

    const teamIsValid =
      !isNullOrEmpty(team.name) &&
      !isNullOrEmpty(team.description) &&
      !!team.size

    const practicesAreValid = Object.values(selectedPractices).some(p => p)

    return teamIsValid && practicesAreValid
  }

  const onStartDiagnostic = async () => {
    if (!isValid()) {
      setAlert({
        open: true,
        message:
          'Preencha as informações corretamente e selecione pelo menos uma prática.'
      })
      return
    }

    const id = await TeamsService.addTeam(team)

    const selectedPracticesList = Object.keys(selectedPractices)
      .filter(id => selectedPractices[id])
      .reduce((list, id) => [...list, practices.find(p => p.id === id)], [])

    setDiagnosticModalProps({
      open: true,
      team: { ...team, id },
      practices: selectedPracticesList
    })

    resetSelectedPractices(practices)

    setTeam({
      name: null,
      description: null,
      size: null
    } as TeamType)
  }

  const onCloseDignosticModal = () => setDiagnosticModalProps({ open: false })

  return (
    <>
      <Head>
        <title>Novo Diagnóstico</title>
      </Head>
      <PageHeader icon={<AddCircleRoundedIcon />} title="Novo Diagnóstico" />
      <Card>
        <Typography>
          Para realizar um novo diagnóstico, insira informações sobre o time e
          as práticas que serão analisadas:
        </Typography>
        <Form>
          <TextField
            name="name"
            label="Nome do Time"
            value={team.name}
            onChange={handleChangeTeam}
            autoFocus
          />
          <TextField
            name="size"
            label="Tamanho"
            placeholder="8 pessoas"
            value={team.size}
            onChange={handleChangeTeam}
            type="number"
          />
          <TextField
            name="description"
            label="Descrição do Produto"
            placeholder="Sistema de planejamento logístico de uma empresa atacadista"
            value={team.description}
            onChange={handleChangeTeam}
            rows={4}
            multiline
          />
          <Practices>
            {selectedPractices &&
              practices.map(p => (
                <FormControlLabel
                  key={p.id}
                  label={p.name}
                  control={
                    <Checkbox
                      name={p.id}
                      checked={selectedPractices[p.id]}
                      onChange={handleSelectPractice}
                    />
                  }
                />
              ))}
          </Practices>
          <Button
            variant="contained"
            color="primary"
            onClick={onStartDiagnostic}
          >
            Iniciar
          </Button>
        </Form>
      </Card>
      <DiagnosticModal
        {...diagnosticModalProps}
        handleClose={onCloseDignosticModal}
      />
      <Snackbar
        open={alert.open}
        onClose={() => setAlert({ open: false })}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        autoHideDuration={6000}
      >
        <Alert severity="error">{alert.message}</Alert>
      </Snackbar>
    </>
  )
}

export default NewDiagnostic
