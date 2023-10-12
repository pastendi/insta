import axios from 'axios'

const baseApi = axios.create({
  baseURL: 'http://localhost:8000',
})

export const getPosts = async () => {
  const res = await baseApi.get('/post')
  return res.data
}
