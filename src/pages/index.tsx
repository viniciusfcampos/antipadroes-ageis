import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import { Card } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import PageHeader from '../components/PageHeader'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PageHeader icon={<HomeRoundedIcon />} title="Home" />
      <Card>Home</Card>
    </>
  )
}

export default Home
