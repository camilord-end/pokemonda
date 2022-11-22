import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    mode: 'dark'
  },
  props: {
    MuiAppBar: {
      color: 'default'
    }
  }
})
