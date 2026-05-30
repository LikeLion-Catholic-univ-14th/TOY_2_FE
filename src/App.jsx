import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Feed from './pages/Feed'
import Buylog from './pages/Buylog'
import Login from './pages/Login'
import BottomNavBar from './components/BottomNavBar'

function Layout() {
  const location = useLocation()
  const hideNav = location.pathname === '/'

  return (
    <div style={{
      width: '390px',
      margin: '0 auto',
      position: 'relative',
      minHeight: '844px',
    }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/buylog" element={<Buylog />} />
      </Routes>
      {!hideNav && <BottomNavBar />}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App