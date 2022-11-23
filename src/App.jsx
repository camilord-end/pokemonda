import { SearchBar } from './components/SearchBar'
import { useData } from './hooks/useData'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export const App = () => {
  const { data } = useData()

  return (
    <Container maxWidth='xl' align='center'>
      <main className='App'>
        <Box marginBottom={4}>
          <section id='Search'>
            <Typography variant='h3'>Pokemondata</Typography>
            {data !== null ? <SearchBar data={data} /> : null}
          </section>
        </Box>
        <section id='Data'></section>
      </main>
    </Container>
  )
}
