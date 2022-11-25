import { useEffect, useState } from 'react'
import { getPokemonList } from '../services/getPokemonList'

export const useData = (num) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    getPokemonList(num)
      .then((response) => {
        setData(response.results)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [num])
  return { data }
}
