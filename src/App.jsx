import { useState, useEffect } from 'react' 
import { Routes, Route, useLocation } from 'react-router-dom' // TAMBAHKAN useLocation
import OrderForm from './pages/OrderFrom'
import Home from './pages/Home'

function App() {
  const location = useLocation(); 
  const PIXEL_ID = '781730877632885'; 

  useEffect(() => {
    // Fungsi ini akan berjalan setiap kali user buka web 
    // atau pindah dari halaman Home ke OrderForm
    if (window.fbq) {
      window.fbq('init', PIXEL_ID);
      window.fbq('track', 'PageView');
    }
  }, [location]); // Trigger otomatis berdasarkan lokasi rute

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<OrderForm />} />
    </Routes>
  )
}

export default App