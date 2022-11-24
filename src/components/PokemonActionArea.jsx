import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

export const PokemonActionArea = ({
  sprites: { back_default, back_shiny, front_default, front_shiny },
  name,
  id
}) => {
  const [index, setIndex] = useState(0)
  const spritesArr = [front_default, front_shiny, back_default, back_shiny]
  const spritesLength = spritesArr.length

  const changeSprite = () => {
    index === spritesLength - 1 ? setIndex(0) : setIndex((prev) => prev + 1)
  }

  return (
    <CardActionArea onClick={changeSprite}>
      <CardMedia
        component='img'
        image={spritesArr[index]}
        height='275'
        alt='pokemon photo'
      />
      <CardContent>
        <Container
          align='center'
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Typography variant='h4'>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            ID :{id}
          </Typography>
        </Container>
      </CardContent>
    </CardActionArea>
  )
}
