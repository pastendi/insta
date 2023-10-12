import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard, Setting, Profile } from './page'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
