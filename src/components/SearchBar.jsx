import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export const SearchBar = ({ data }) => {
  const [input, setInput] = useState(null)

  return (
    <Box maxWidth='sm'>
      <Autocomplete
        id='Pokemon-Input'
        options={data.map(
          ({ name }) => name.charAt(0).toUpperCase() + name.slice(1)
        )}
        value={input}
        onChange={(e, newInput) => {
          setInput(newInput)
        }}
        renderInput={(params) => <TextField {...params} label='Pokemon' />}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
      />
      <div>{input}</div>
    </Box>
  )
}
