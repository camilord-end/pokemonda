import axios from 'axios'

export const getPokemonByName = async (name) => {
  const randomInput = Math.floor(Math.random() * 251)
  let POKEMON_URL = ''
  name
    ? (POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
    : (POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/${randomInput}`)
  const response = await axios.get(POKEMON_URL)
  if (response && response.data) return response.data
}
