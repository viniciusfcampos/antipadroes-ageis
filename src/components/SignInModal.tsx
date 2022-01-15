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
  height: 400px;
  display: grid;
  align-content: center;
  grid-gap: 1rem;
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

export type SignInModalProps = Partial<{
  open: boolean
  handleClose: () => void
}>

const SignInModal: React.FC<SignInModalProps> = ({
  open,
  handleClose
}) => {
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const { signIn } = useAuth()

  const onSignIn = () => {
    setLoading(true)
    signIn(email, password).then(() => {
      router.push('/')
      handleClose()
      setEmail('')
      setPassword('')
      setError('')
    }).catch(({ message }) => {
      setError(message)
    }).finally(() => setLoading(false))
  }

  const handleOnChange = (set, { target: { value } }) => {
    set(value)
    setError(false)
  }

  return (
    <Modal open={open}>
      <Container>
        <CancelButton onClick={handleClose} tabIndex={-1}>
          <CancelIcon />
        </CancelButton>

        <Card>
          <Typography variant="h4">Login</Typography>
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
          <Button onClick={onSignIn} variant="contained" loading={loading}>Entrar</Button>
        </Card>
      </Container>
    </Modal>
  )
}

export default SignInModal
