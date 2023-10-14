import { baseApi } from './baseApi'

export const register = async (userData) => {
  const res = await baseApi.post('/user', { userData })
  return res.data
}
export const login = async (data) => {
  const res = await baseApi.post('/login', data, {
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  })
  localStorage.setItem('user', JSON.stringify(res.data))
  return res.data
}
