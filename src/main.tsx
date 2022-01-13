import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { CryptoContext } from 'context/cryptoContext'
import { ThemeContext } from 'context/themeContext'

import queryClient from 'config/queryClient'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeContext>
          <CryptoContext>
            <CssBaseline />
            <App />
          </CryptoContext>
        </ThemeContext>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
