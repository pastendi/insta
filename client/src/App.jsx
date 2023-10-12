import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout, Feeds } from './page'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Feeds />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
