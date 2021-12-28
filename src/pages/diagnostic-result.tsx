import FolderRoundedIcon from '@mui/icons-material/FolderRounded'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Kanban from '../components/Kanban/Kanban'
import PageHeader from '../components/PageHeader'
import { DiagnosticService } from '../services/DiagnosticService'
import { TeamsService } from '../services/TeamsService'
import { TeamType } from '../types/TeamType'

const TeamDiagnostic: React.FC = () => {
  const router = useRouter()

  const { teamId } = router.query

  const [diagnostic, setDiagnostic] = useState<TeamType>(null)

  useEffect(() => {
    if (teamId)
      TeamsService.getTeam(teamId as string).then(t => setDiagnostic(t))
  }, [teamId])

  const handleUpdate = antipatterns => {
    DiagnosticService.updateDiagnostic(teamId as string, antipatterns)
  }

  return (
    <>
      <Head>
        <title>Diagnóstico - {diagnostic?.name}</title>
      </Head>
      <PageHeader icon={<FolderRoundedIcon />} title={diagnostic?.name} />
      <Kanban antipatterns={diagnostic?.antipatterns} onUpdate={handleUpdate} />
    </>
  )
}

export default TeamDiagnostic
