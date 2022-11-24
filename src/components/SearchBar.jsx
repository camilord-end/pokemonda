import Container from '@mui/material/Container'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

export const SearchBar = ({ data, input, setInput }) => {
  return (
    <Container maxWidth='xs'>
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
    </Container>
  )
}
