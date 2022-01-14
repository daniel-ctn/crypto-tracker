import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { CryptoContext } from 'context/cryptoContext'
import { ThemeContext } from 'context/themeContext'

import queryClient from 'config/queryClient'
import 'i18n'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading....</div>}>
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
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
)
