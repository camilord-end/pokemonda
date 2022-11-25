import { SearchBar } from '../components/SearchBar'
import { Pokemon } from '../components/Pokemon'

import { useData } from '../hooks/useData'
import { useState } from 'react'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export const App = () => {
  const amountOfPokemons = 386 // up to 1000
  const { data } = useData(amountOfPokemons)
  const [input, setInput] = useState(null)

  return (
    <Container maxWidth='xl' align='center'>
      <main className='App'>
        <Box marginBottom={4}>
          <section id='Search'>
            <Typography margin={2} variant='h3'>
              Pokemondata
            </Typography>
            {data !== null ? (
              <SearchBar data={data} input={input} setInput={setInput} />
            ) : null}
          </section>
        </Box>
        <section id='Data'>
          <Pokemon input={input} />
        </section>
      </main>
    </Container>
  )
}
