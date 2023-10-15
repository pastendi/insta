import { axiosInstance } from './axiosInstance'

export const useAuth = () => {
  const login = async (data) => {
    const res = await axiosInstance.post('/login', data, {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
    localStorage.setItem('user', JSON.stringify(res.data))
    return res.data
  }
  const register = async (data) => {
    const res = await axiosInstance.post('/user', data)
    localStorage.setItem('user', JSON.stringify(res.data))
    return res.data
  }
  return { login, register }
}
