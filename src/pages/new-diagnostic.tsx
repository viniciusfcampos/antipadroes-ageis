import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import {
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import styled from 'styled-components'
import { PracticeType } from '../types/PracticeType'
import { TeamsService } from '../services/TeamsService'
import { TeamType } from '../types/TeamType'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import { PracticesService } from '../services/PracticesService'
import DiagnosticModal, {
  DiagnosticModalProps
} from '../components/DisgnosticModal/DiagnosticModal'

const Form = styled(Box)`
  display: grid;
  grid-gap: 1rem;
  margin: 5rem auto;
  max-width: 340px;
`

const filter = createFilterOptions()

const NewDiagnostic: React.FC = () => {
  const [practices, setPractices] = useState<PracticeType[]>([])

  const [teams, setTeams] = useState<TeamType[]>([])

  const [practice, setPractice] = useState<PracticeType>(null as PracticeType)

  const [team, setTeam] = useState<TeamType>(null as TeamType)

  const [diagnosticModalProps, setDiagnosticModalProps] = useState<
    DiagnosticModalProps
  >({ open: false })

  useEffect(() => {
    PracticesService.getPractices().then(p => {
      setPractices(p)
    })

    TeamsService.getTeams().then(t => {
      setTeams(t)
    })
  }, [])

  const onSelectPractice = ({ target: { value } }) => {
    const selectedPractice = practices.find(p => p.id === value)
    setPractice(selectedPractice)
  }

  const filterTeams = (options, params) => {
    const filtered = filter(options, params)

    const { inputValue } = params

    const isExisting = options.some(option => inputValue === option.title)
    if (inputValue !== '' && !isExisting) {
      filtered.push({
        inputValue,
        name: `Criar time "${inputValue}"`
      })
    }

    return filtered
  }

  const onChangeTeam = (_, newValue) => {
    if (typeof newValue === 'string') {
      setTeam({ id: null, name: newValue })
    } else if (newValue && newValue.inputValue) {
      setTeam({ id: null, name: newValue.inputValue })
    } else {
      setTeam(newValue)
    }
  }

  const onStartDiagnostic = async () => {
    if (!team.id) {
      const teamId = await TeamsService.addTeam(team)
      team.id = teamId
    }

    setDiagnosticModalProps({
      open: true,
      team: { ...team },
      practice: { ...practice }
    })
    setPractice(null)
    setTeam(null)
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
          Para realizar um novo diagnóstico, selecione o time e a prática que
          serão analisados:
        </Typography>
        <Form>
          <Autocomplete
            value={team}
            onChange={onChangeTeam}
            filterOptions={filterTeams}
            options={teams}
            getOptionLabel={option => option.name}
            renderOption={(props, option) => <li {...props}>{option.name}</li>}
            renderInput={params => (
              <TextField {...params} variant="filled" label="Time" />
            )}
            freeSolo
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
          />

          <FormControl fullWidth>
            <InputLabel>Prática</InputLabel>
            <Select
              variant="filled"
              value={practice ? practice.id : ''}
              onChange={onSelectPractice}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {practices.map(p => (
                <MenuItem value={p.id} key={p.id}>
                  {p.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={onStartDiagnostic}
            disabled={!team || !practice}
          >
            Iniciar
          </Button>
        </Form>
      </Card>
      <DiagnosticModal
        {...diagnosticModalProps}
        handleClose={onCloseDignosticModal}
      />
    </>
  )
}

export default NewDiagnostic
