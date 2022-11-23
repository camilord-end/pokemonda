import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { App } from './App'
import { theme } from './utils/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    <App />
  </ThemeProvider>
)
