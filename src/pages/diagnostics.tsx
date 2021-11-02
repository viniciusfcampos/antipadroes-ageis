import FolderRoundedIcon from '@mui/icons-material/FolderRounded'
import { Card } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import PageHeader from '../components/PageHeader'

const Diagnostics: React.FC = () => {
  return (
    <>
      <Head>
        <title>Diagnósticos</title>
      </Head>
      <PageHeader icon={<FolderRoundedIcon />} title="Diagnósticos" />
      <Card>Diagnósticos</Card>
    </>
  )
}

export default Diagnostics
