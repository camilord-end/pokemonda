import { PokemonTypeIcons } from '../utils/PokemonTypeIcons'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

export const PokemonTypes = ({ types }) => {
  return (
    <Box m={2}>
      <Typography m={1} variant='h5'>
        Types
      </Typography>
      {types.map(({ type: { name } }) => (
        <Box m={1} key={name}>
          <Chip
            variant='outlined'
            icon={PokemonTypeIcons[name]}
            label={name.charAt(0).toUpperCase() + name.slice(1)}
            onClick={() => {}}
          />
        </Box>
      ))}
    </Box>
  )
}
