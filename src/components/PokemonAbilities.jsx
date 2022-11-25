import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone'

export const PokemonAbilities = ({ abilities }) => {
  return (
    <Box>
      <Typography variant='h5'>Special Abilities</Typography>
      <List>
        {abilities.map(({ ability }) => (
          <ListItem disablePadding key={ability.name}>
            <ListItemButton>
              <ListItemIcon>
                <CatchingPokemonTwoToneIcon
                  color='secondary'
                  fontSize='large'
                />
              </ListItemIcon>
              <ListItemText
                secondary={
                  ability.name.charAt(0).toUpperCase() + ability.name.slice(1)
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
