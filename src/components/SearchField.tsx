import { SearchRounded } from '@mui/icons-material'
import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Field = styled(TextField)`
  .MuiInputBase-input {
    padding-top: 12px;
  }
`

type SearchFieldProps = TextFieldProps

const SearchField: React.FC<SearchFieldProps> = props => {
  return (
    <Field
      {...props}
      variant="filled"
      autoFocus
      InputProps={{
        type: 'search',
        endAdornment: <SearchRounded />
      }}
    />
  )
}

export default SearchField
