import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Typography } from '@mui/material'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <Typography variant="h1">Selecione a prática!</Typography>
      <Link href="/">Home</Link>
    </Container>
  )
}

export default Home
