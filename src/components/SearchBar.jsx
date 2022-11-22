import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export const SearchBar = ({ data }) => {
  const [input, setInput] = useState('')

  return (
    <Box sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        value={input}
        onChange={(e, newInput) => {
          setInput(newInput)
        }}
        id='Pokemon-Input'
        options={data.map(
          ({ name }) => name.charAt(0).toUpperCase() + name.slice(1)
        )}
        renderInput={(params) => <TextField {...params} label='Pokemon' />}
      />
      <div>{input}</div>
    </Box>
  )
}
