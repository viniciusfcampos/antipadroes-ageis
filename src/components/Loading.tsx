import { Box } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Loader = styled(Box)`
  display: grid;
  grid-gap: 4px;
  grid-auto-flow: column;
  height: 19px;
  align-items: center;

  @keyframes ball-beat {
    50% {
      opacity: 0.2;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const Item = styled(Box)`
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background-color: #fff;
  animation-fill-mode: both;
  animation: ball-beat 1.2s 0s infinite linear;

  &:nth-child(2) {
    animation-delay: 0.4s !important;
  }

  &:nth-child(3) {
    animation-delay: 0.8s !important;
  }
`

const Loading = () => {
  return (
    <Loader>
      <Item />
      <Item />
      <Item />
    </Loader>
  )
}

export default Loading
