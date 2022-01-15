import { Button as MuiButton, UseButtonProps } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Loading from './Loading'

const TheButton = styled(MuiButton)`
  min-height: 2.5rem;
`

export type ButtonProps = {
  onClick: () => void,
  disabled?: boolean,
  loading: boolean,
  variant?: "text" | "outlined" | "contained",
}

const Button: React.FC<ButtonProps> = ({ onClick, children, loading, disabled, variant }) => {
  return (
    <TheButton onClick={onClick} variant={variant} disabled={loading || disabled}>
      {!loading && children}
      {loading && <Loading />}
    </TheButton>
  )
}

export default Button
