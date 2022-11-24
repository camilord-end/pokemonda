import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined'

export const PokemonTypes = ({ types }) => {
  return (
    <Box m={2}>
      <Typography m={1} variant='h5'>
        Types
      </Typography>
      {types.map(({ type }) => (
        <Box m={1} key={type.name}>
          <Chip
            variant='outlined'
            icon={<LocalFireDepartmentOutlinedIcon />}
            label={type.name.charAt(0).toUpperCase() + type.name.slice(1)}
            onClick={() => {}}
          />
        </Box>
      ))}
    </Box>
  )
}
