import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Dashboard,
  Setting,
  Profile,
  SignIn,
  SignUp,
  RouteProtection,
  Layout,
} from './page'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<SignUp />} />
          <Route element={<Layout />}>
            <Route path='/' element={<RouteProtection />}>
              <Route index element={<Dashboard />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/setting' element={<Setting />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
