import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Container = styled(Box)`
  display: grid;
  grid-gap: 4rem;
`

const CarouselContainer = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  transition: all 0.3s ease-in-out;
  transform: translateX(0);
  width: calc(300px + 32px);

  & > * {
    transform: scale(0.75);
    margin: 0 -16px;
    opacity: 0.5;
    transition: all 0.3s ease-in-out;
    user-select: none;

    &.current {
      transform: scale(1);
      margin: 0 16px;
      opacity: 1;
    }
  }
`

const Controls = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  user-select: none;
  margin: 0 auto;
  width: 300px;
  color: #fff;
  align-items: center;

  .MuiSvgIcon-root {
    fill: white;
  }

  .MuiIconButton-root.Mui-disabled {
    .MuiSvgIcon-root {
      opacity: 0.5;
    }
  }
`

type CarouselProps = {
  position: number
  handleChangePosition: (position) => void
}

const Carousel: React.FC<CarouselProps> = ({
  position,
  handleChangePosition,
  children
}) => {
  const getCarouselPosition = () => {
    const translateDueToCard = -300 * 0.75 * position
    const translateDueToMargin = -43 * position
    return `translateX(${translateDueToCard + translateDueToMargin}px)`
  }

  const styleChildren = () => {
    return React.Children.map(children, (child, i) =>
      React.cloneElement(child as ReactElement, {
        className: `${i === position ? 'current' : ''}`
      })
    )
  }

  return (
    <Container>
      <CarouselContainer style={{ transform: getCarouselPosition() }}>
        {styleChildren()}
      </CarouselContainer>
      <Controls>
        <IconButton
          onClick={() => handleChangePosition(-1)}
          disabled={position === 0}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
        <Typography>
          {position + 1}/{React.Children.count(children)}
        </Typography>
        <IconButton
          onClick={() => handleChangePosition(1)}
          disabled={position === React.Children.count(children) - 1}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Controls>
    </Container>
  )
}

export default Carousel
