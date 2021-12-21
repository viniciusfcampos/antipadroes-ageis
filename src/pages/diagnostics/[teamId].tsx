import FolderRoundedIcon from '@mui/icons-material/FolderRounded'
import { Card as MuiCard } from '@mui/material'
import { styled } from '@mui/system'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import DiagnosticItem from '../../components/DiagnosticsTable/DiagnosticItem'
import DiagnosticsTable from '../../components/DiagnosticsTable/DiagnosticsTable'
import Kanban from '../../components/Kanban/Kanban'
import PageHeader from '../../components/PageHeader'
import { TeamsService } from '../../services/TeamsService'
import { TeamType } from '../../types/TeamType'

const Card = styled(MuiCard)`
  padding: 0;
  max-height: 80vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr;
`

const TeamDiagnostic: React.FC = () => {
  const router = useRouter()

  const { teamId } = router.query

  const [diagnostic, setDiagnostic] = useState<TeamType>(null)

  useEffect(() => {
    if (teamId)
      TeamsService.getTeam(teamId as string).then(t => setDiagnostic(t))
  }, [teamId])

  return (
    <>
      <Head>
        <title>Diagnóstico - {diagnostic?.name}</title>
      </Head>
      <PageHeader icon={<FolderRoundedIcon />} title={diagnostic?.name} />
      <Kanban antipatterns={diagnostic?.antipatterns} />
    </>
  )
}

export default TeamDiagnostic
