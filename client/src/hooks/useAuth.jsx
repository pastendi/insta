import { queryKeys } from '../constants/queryKeys'
import { useBearStore } from '../store/store'
import { axiosInstance } from './axiosInstance'
import { useQueryClient } from 'react-query'

export const useAuth = () => {
  const { setUser } = useBearStore()
  const queryClient = useQueryClient()
  const login = async (data) => {
    const res = await axiosInstance.post('/login', data, {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
    localStorage.setItem('user', JSON.stringify(res?.data))
    setUser(res?.data)
    return res.data
  }
  const register = async (data) => {
    const res = await axiosInstance.post('/user', data)
    localStorage.setItem('user', JSON.stringify(res?.data))
    setUser(res?.data)
    return res.data
  }
  const logout = async () => {
    localStorage.removeItem('user')
    queryClient.removeQueries()
  }
  return { login, register, logout }
}
