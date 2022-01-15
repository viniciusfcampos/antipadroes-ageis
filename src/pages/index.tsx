import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import { Button, Card as MuiCard, Divider, Typography } from '@mui/material'
import styled from 'styled-components'
import Head from 'next/head'
import React from 'react'
import PageHeader from '../components/PageHeader'
import Link from 'next/link'
import { AddCircleRounded } from '@mui/icons-material'
import { Box } from '@mui/system'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/router'

const Card = styled(MuiCard)`
  padding-top: 4rem;

  .MuiTypography-root {
    margin-bottom: 1rem;
  }

  .MuiDivider-root {
    margin: 1.5rem 0;
  }
`

const ButtonArea = styled(Box)`
  padding: 2rem 0;
  display: grid;
  justify-content: start;
`

const Home: React.FC = () => {
  const router = useRouter()

  const { authenticated, setSignInModal } = useAuth()

  const onStartDiagnostic = () => {
    const redirectTo = '/new-diagnostic'

    if (authenticated) {
      router.push(redirectTo)
      return
    }

    setSignInModal({ open: true, redirectTo })
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PageHeader icon={<HomeRoundedIcon />} title="Home" />
      <Card>
        <Typography variant="h4">Bem vindo!</Typography>

        <Divider />
        <Typography>
          <b>Práticas ágeis</b> são atividades utilizadas para manifestar ou
          implementar os princípios e valores apresentados no Manifesto Ágil.
          Por serem pouco prescritivas, pode ser difícil para uma organização
          identificar se ela está cumprindo o objetivo esperado. Além disso, a
          alta adaptabilidade de uma prática ágil permite que sejam introduzidas
          certas características ou comportamentos, conhecidos como{' '}
          <b>antipadrões</b>, que podem torná-la ineficaz ou até mesmo
          prejudicial para o time.
        </Typography>

        <Typography>
          O objetivo deste sistema é permitir que o time faça um diagnóstico da
          execução das práticas ágeis em seu contexto para identificar possíveis
          antipadrões. Após isso, é apresentado um plano de ação para
          eliminá-los que pode ser acompanhado por meio de um kanban.
        </Typography>

        <ButtonArea>
          <Button onClick={onStartDiagnostic} variant="contained" startIcon={<AddCircleRounded />}>
            Realizar diagnóstico
          </Button>
        </ButtonArea>

        <Divider />

        <Typography variant="caption">
          Desenvolvido por Vinícius Felicíssimo Campos para o Trabalho de
          Conclusão de Curso II do curso Engenharia de Sistemas da UFMG.
        </Typography>
      </Card>
    </>
  )
}

export default Home
