import CancelIcon from '@mui/icons-material/Cancel'
import { Card as MuiCard, IconButton, Modal, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../contexts/AuthContext'
import Button from './Button'

const Container = styled(Box)`
  height: 100%;
  width: 100vw;
  display: grid;
  align-content: center;
  justify-content: center;

  .MuiIconButton-root {
    .MuiSvgIcon-root {
      fill: white;
    }
  }
`

const Card = styled(MuiCard)`
  padding-top: 3rem;
  padding-bottom: 3rem;
  width: 340px;
  display: grid;
  align-content: center;
  grid-gap: 1rem;
`

const Header = styled(Box)`
  .MuiTypography-h4 {
    margin: 0;
  }
`

const Question = styled(Box)`
  p {
    display: inline-block;
  }
`

const ErrorArea = styled(Box)`
  min-height: 2.5rem;

  .MuiTypography-caption {
    display: block;
  }
`

const CancelButton = styled(IconButton)`
  && {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
  }
`

export type SignInModalProps = {}

const SignInModal: React.FC<SignInModalProps> = ({ }) => {
  const [isSignIn, setIsSignIn] = useState(true)

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const { signIn, signUp, signInModal, setSignInModal } = useAuth()

  const handleClose = () => setSignInModal({ open: false, redirectTo: '/' })

  const onContinue = () => {
    const sign = isSignIn ? signIn : signUp

    setLoading(true)
    sign(email, password).then(() => {
      handleClose()
      setEmail('')
      setPassword('')
      setError('')
      setIsSignIn(true)
      router.push(signInModal.redirectTo)
    }).catch(({ message }) => {
      setError(message)
    }).finally(() => setLoading(false))
  }

  const handleModeChange = () => {
    setIsSignIn(!isSignIn)
    setError('')
  }

  const handleOnChange = (set, { target: { value } }) => {
    set(value)
    setError('')
  }

  return (
    <Modal open={signInModal.open} BackdropProps={{ className: 'blurred' }}>
      <Container>
        <CancelButton onClick={handleClose} tabIndex={-1}>
          <CancelIcon />
        </CancelButton>

        <Card>
          <Header>
            <Typography variant="h4">{isSignIn ? 'Login' : 'Cadastro'}</Typography>
            <Question>
              <Typography variant="body2">
                {isSignIn ? 'Ainda não é cadastrado?' : 'Já é cadastrado?'}
              </Typography>
              <Button onClick={handleModeChange}>
                {isSignIn ? 'Cadastrar' : 'Entrar'}
              </Button>
            </Question>
          </Header>

          <TextField
            variant="filled"
            label="Email"
            name="email"
            value={email}
            error={!!error}
            onChange={e => handleOnChange(setEmail, e)}
          />

          <TextField
            variant="filled"
            label="Senha"
            name="password"
            type="password"
            value={password}
            error={!!error}
            onChange={e => handleOnChange(setPassword, e)}
          />
          <ErrorArea>
            {error && <Typography variant='caption' color='error'>{error}</Typography>}
          </ErrorArea>
          <Button onClick={onContinue} variant="contained" loading={loading}>
            {isSignIn ? 'Entrar' : 'Cadastrar'}
          </Button>
        </Card>
      </Container>
    </Modal>
  )
}

export default SignInModal
