import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import OrderForm from './pages/OrderFrom'
import Home from './pages/Home'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/order" element={<OrderForm />} />
    </Routes>
  )
}

export default App
