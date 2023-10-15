import { axiosInstance } from './axiosInstance'

export const usePost = () => {
  const getPosts = async () => {
    const res = await axiosInstance.get('/post')
    return res.data
  }
  return { getPosts }
}
