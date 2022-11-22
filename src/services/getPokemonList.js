import axios from 'axios'

export const getPokemonList = async (num = 251) => {
  const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon?limit=${num}&offset=0`
  const response = await axios.get(POKEMON_URL)
  //console.log(response.data)
  return response.data
}
