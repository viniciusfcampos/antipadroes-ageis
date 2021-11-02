import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import { Card } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import PageHeader from '../components/PageHeader'

const NewDiagnostic: React.FC = () => {
  return (
    <>
      <Head>
        <title>Novo Diagnóstico</title>
      </Head>
      <PageHeader icon={<AddCircleRoundedIcon />} title="Novo Diagnóstico" />
      <Card>Novo Diagnóstico</Card>
    </>
  )
}

export default NewDiagnostic
