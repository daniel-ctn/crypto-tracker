import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<p>home page</p>} />
    </Routes>
  )
}

export default App
