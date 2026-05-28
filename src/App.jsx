import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed'
import Buylog from './pages/Buylog'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/buylog" element={<Buylog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App