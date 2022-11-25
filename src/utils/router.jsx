import { createBrowserRouter } from 'react-router-dom'

import { App } from '../pages/App'
import { ErrorPage } from '../components/ErrorPage'
import { Pokemon } from '../components/Pokemon'

export const router = createBrowserRouter([
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
