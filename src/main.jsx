import ReactDOM from 'react-dom/client'
import { router } from './utils/router'

import { StyledEngineProvider } from '@mui/material/styles'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './utils/theme'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StyledEngineProvider>
)
