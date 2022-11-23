import { useEffect, useState } from 'react'
import { getPokemonList } from '../services/getPokemonList'

export const useData = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    getPokemonList()
      .then((response) => {
        setData(response.results)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  return { data }
}
