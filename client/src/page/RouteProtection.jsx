import { Navigate, Outlet } from 'react-router-dom'
import { useBearStore } from '../store/store'
import { useEffect } from 'react'

const RouteProtection = () => {
  const user = localStorage.getItem('user')
  const { setUser } = useBearStore()
  const cred = JSON.parse(user)

  useEffect(() => {
    if (user) {
      setUser(cred)
    }
  }, [])
  return user ? <Outlet /> : <Navigate to={'/login'} />
}

export default RouteProtection
