import ReactDOM from 'react-dom/client'

import { App } from './pages/App'
import { ErrorPage } from './components/ErrorPage'
import { Pokemon } from './components/Pokemon'

import { StyledEngineProvider } from '@mui/material/styles'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './utils/theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'pokemon/:name',
        element: <Pokemon />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StyledEngineProvider>
)
