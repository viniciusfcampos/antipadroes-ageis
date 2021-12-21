import FolderRoundedIcon from '@mui/icons-material/FolderRounded'
import { Card as MuiCard, Button } from '@mui/material'
import { styled } from '@mui/system'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DiagnosticsTable from '../../components/DiagnosticsTable/DiagnosticsTable'
import PageHeader from '../../components/PageHeader'
import { TeamsService } from '../../services/TeamsService'
import { TeamType } from '../../types/TeamType'

const Card = styled(MuiCard)`
  padding: 0;
  max-height: 70vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr;
`

const Diagnostics: React.FC = () => {
  const [diagnostics, setDiagnostics] = useState<TeamType[]>([])

  useEffect(() => {
    TeamsService.getTeams().then(t => setDiagnostics(t.reverse()))
  }, [])

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
        <DiagnosticsTable diagnostics={diagnostics} />
      </Card>
    </>
  )
}

export default Diagnostics
