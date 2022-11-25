import { useEffect, useState } from 'react'
import { getPokemonByName } from '../services/getPokemonByName'

export const usePokemon = (name) => {
  const [pokemon, setPokemon] = useState(null)
  useEffect(() => {
    getPokemonByName(name)
      .then((response) => {
        setPokemon(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [name])
  return { pokemon }
}
