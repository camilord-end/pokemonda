import { styled } from '@mui/material/styles'

import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ExpandMore = styled((props) => {
  const { ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))

export const PokemonCardActions = ({ expanded, handleClick }) => {
  return (
    <CardActions disableSpacing>
      <IconButton aria-label='add to favorites'>
        <FavoriteIcon color='error' />
      </IconButton>
      <IconButton aria-label='share'>
        <ShareIcon color='info' />
      </IconButton>
      <ExpandMore
        expand={expanded ? 1 : undefined}
        onClick={handleClick}
        aria-expanded={expanded}
        aria-label='show more'
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
  )
}
