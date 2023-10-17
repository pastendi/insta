import { useBearStore } from '../store/store'
import { axiosInstance } from './axiosInstance'

export const usePost = () => {
  const { user } = useBearStore()
  const getPosts = async () => {
    const res = await axiosInstance.get('/post')
    return res.data
  }
  const addPost = async (data) => {
    const res = await axiosInstance.post('/post', data, {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    return res.data
  }
  return { getPosts, addPost }
}
