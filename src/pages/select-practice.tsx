import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <h1>Selecione a prática!</h1>
      <Link href="/">Home</Link>
    </Container>
  )
}

export default Home
