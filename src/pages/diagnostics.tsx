import FolderRoundedIcon from '@mui/icons-material/FolderRounded'
import { Button, Card as MuiCard } from '@mui/material'
import { styled } from '@mui/system'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DiagnosticsTable from '../components/DiagnosticsTable/DiagnosticsTable'
import PageHeader from '../components/PageHeader'
import { useAuth } from '../contexts/AuthContext'
import { TeamsService } from '../services/TeamsService'
import { TeamType } from '../types/TeamType'

const Card = styled(MuiCard)`
  padding: 0;
  max-height: 70vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr;
`

const Diagnostics: React.FC = () => {

  const { user } = useAuth()

  const [diagnostics, setDiagnostics] = useState<TeamType[]>([])

  useEffect(() => {
    TeamsService.getTeams(user).then(t => {
      setDiagnostics(t.reverse())
    })
  }, [])

  const onDelete = (teamId) => {
    TeamsService.removeTeam(teamId).then(() => {
      const newDiagnostics = diagnostics.filter(d => d.id !== teamId)
      setDiagnostics(newDiagnostics)
    })
  }

  return (
    <>
      <Head>
        <title>Diagnósticos</title>
      </Head>
      <PageHeader
        icon={<FolderRoundedIcon />}
        title="Diagnósticos"
        sideComponent={
          <Link href="/new-diagnostic">
            <Button color="primary" variant="contained">
              Novo diagnóstico
            </Button>
          </Link>
        }
      />
      <Card>
        <DiagnosticsTable diagnostics={diagnostics} onDelete={onDelete} />
      </Card>
    </>
  )
}

Diagnostics['auth'] = 'AUTHENTICATED'

export default Diagnostics
