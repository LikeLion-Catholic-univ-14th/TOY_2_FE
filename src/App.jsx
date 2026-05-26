import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed'
import Buylog from './pages/Buylog'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/buylog" element={<Buylog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App