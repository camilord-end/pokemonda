import { PokemonStatTable } from './PokemonStatTable'
import { PokemonTypes } from './PokemonTypes'
import { PokemonAbilities } from './PokemonAbilities'
import { PokemonActionArea } from './PokemonActionArea'
import { PokemonCardActions } from './PokemonCardActions'
import { Loader } from './Loader'

import { usePokemon } from '../hooks/usePokemon'
import { useState } from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import { Divider } from '@mui/material'

export const Pokemon = ({ input }) => {
  const { pokemon } = usePokemon(input)
  const [expanded, setExpanded] = useState(false)

  if (!pokemon) return <Loader />

  const handleExpandClick = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <Container maxWidth='xs' align='center'>
      <Card variant='outlined'>
        <PokemonActionArea
          id={pokemon.id}
          name={pokemon.name}
          sprites={pokemon.sprites}
        />
        <Divider />
        <PokemonCardActions
          expanded={expanded}
          handleClick={handleExpandClick}
        />
        <Divider />
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <PokemonAbilities abilities={pokemon.abilities} />
            <Divider />
            <PokemonTypes types={pokemon.types} />
            <Divider />
            <Box m={3}>
              <PokemonStatTable stats={pokemon.stats} />
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  )
}
