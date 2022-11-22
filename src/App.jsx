import { useState, useEffect } from 'react'
import { SearchBar } from './components/SearchBar'
import { PokemonList } from './components/PokemonList'

import { getPokemonList } from './services/getPokemonList'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export const App = () => {
  const [data, setData] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    getPokemonList()
      .then((response) => {
        setData(response.results)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const handleShowAll = () => {
    if (showSearch) setShowSearch(false)
    setShowAll((prev) => !prev)
  }

  const handleShowSearch = () => {
    if (showAll) setShowAll(false)
    setShowSearch((prev) => !prev)
  }

  return (
    <Container maxWidth='md' align='center'>
      <main className='App'>
        <Box marginBottom={4}>
          <section id='Search'>
            <Typography variant='h2'>Pokemondata</Typography>
            <Button variant='outlined' color='primary' onClick={handleShowAll}>
              Show All
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              onClick={handleShowSearch}
            >
              Search
            </Button>
          </section>
        </Box>
        <section id='Data'>
          {showAll && data !== null ? <PokemonList data={data} /> : null}
          {showSearch && data !== null ? <SearchBar data={data} /> : null}
        </section>
      </main>
    </Container>
  )
}
