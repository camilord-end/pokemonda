import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'

export const PokemonList = ({ data }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map(({ name, url }) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={name}>
              <p>{name}</p>
              <a href={url} target='_blank' rel='noreferrer'>
                More {name} info
              </a>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
