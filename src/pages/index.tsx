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
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>
      <Link href="/select-practice">Selecionar práticas</Link>
    </Container>
  )
}

export default Home
