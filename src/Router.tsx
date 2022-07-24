import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat/:chave" element={<Home />} />
    </Routes>
  )
}
