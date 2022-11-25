import { useRouteError } from 'react-router-dom'
import Container from '@mui/material/Container'

export const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <Container id='error-page' maxWidth='xl' align='center'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Container>
  )
}
