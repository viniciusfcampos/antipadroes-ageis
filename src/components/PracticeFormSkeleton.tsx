import { ExpandMoreRounded } from '@mui/icons-material'
import {
  Accordion,
  AccordionSummary,
  Skeleton,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components'

const NameContainer = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;
  width: 100%;
`

const Name = styled(Typography)`
  &.gray {
    color: lightgray;
  }
`

const Quantity = styled(Typography)`
  color: lightgray;
  align-self: center;
  margin-right: 1.5rem;
`

const PracticeFormSkeleton: React.FC = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreRounded />} disabled>
        <NameContainer>
          <Name variant="h6">
            <Skeleton width={240} height={32} variant="rectangular" />
          </Name>
          <Quantity>
            <Skeleton width={120} height={24} variant="rectangular" />
          </Quantity>
        </NameContainer>
      </AccordionSummary>
    </Accordion>
  )
}

export default PracticeFormSkeleton
