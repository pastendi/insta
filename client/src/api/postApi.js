import { baseApi } from './baseApi'

export const getPosts = async () => {
  const res = await baseApi.get('/post')
  return res.data
}
