import { SettingsRounded } from '@mui/icons-material'
import { Button, Card, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import PracticeForm from '../components/PracticeForm'
import { PracticesService } from '../services/PracticesService'
import { PracticeType } from '../types/PracticeType'

const Settings: React.FC = () => {
  const [practices, setPractices] = useState<PracticeType[]>([])

  useEffect(() => {
    PracticesService.getPractices().then(p => setPractices(p))
  }, [])

  const addNewPractice = async () => {
    const id = await PracticesService.addPractice()
    setPractices([{ id, name: '', antipatterns: [] }, ...practices])
  }

  const handlePracticeRemoved = id => {
    const filteredPractices = practices.filter(p => p.id !== id)

    setPractices(filteredPractices)
  }

  return (
    <>
      <Head>
        <title>Configurações</title>
      </Head>
      <PageHeader
        icon={<SettingsRounded />}
        title="Configurações"
        sideComponent={
          <Button color="primary" variant="contained" onClick={addNewPractice}>
            Nova prática
          </Button>
        }
      />
      <Card>
        {practices.map(p => (
          <PracticeForm key={p.id} {...p} onRemoved={handlePracticeRemoved} />
        ))}
      </Card>
    </>
  )
}

export default Settings
