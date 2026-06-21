import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastProvider } from './components/ui/Toast'

import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  )
}

export default App