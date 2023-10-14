import { Navigate, Outlet } from 'react-router-dom'

const RouteProtection = () => {
  const user = localStorage.getItem('user')
  return user ? <Outlet /> : <Navigate to={'/login'} />
}

export default RouteProtection
