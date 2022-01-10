import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import Header from 'components/layout/Header'
import HomePage from 'pages/HomePage'
import CoinPage from './pages/CoinPage'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './App.css'

function App() {
  return (
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
  )
}

export default App
