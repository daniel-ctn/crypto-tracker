import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter as Router } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'

import { CryptoContext } from 'context/cryptoContext'
import App from './App'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    mode: 'dark',
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <CryptoContext>
          <CssBaseline />
          <App />
        </CryptoContext>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
