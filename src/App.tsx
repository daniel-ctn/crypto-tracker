import { Route, Routes } from 'react-router-dom'
import { Box, ThemeProvider } from '@mui/material'

import Header from 'components/layout/Header'
import HomePage from 'pages/HomePage'
import CoinPage from 'pages/CoinPage'
import { ThemeContextState } from 'context/themeContext'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './App.css'

function App() {
  const { theme } = ThemeContextState()

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: '#14161a',
          color: 'white',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/coin/:id' element={<CoinPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App
