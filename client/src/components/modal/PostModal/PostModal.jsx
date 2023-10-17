import { useBearStore } from '../../../store/store'
import { AiOutlineClose } from 'react-icons/ai'
import Avatar from '../../Avatar'
import { useState } from 'react'
import AddPostOption from './AddPostOption'
import AddPhoto from './AddPhoto'
import { useMutation, useQueryClient } from 'react-query'
import { usePost } from '../../../hooks/usePost'
import { queryKeys } from '../../../constants/queryKeys'
const PostModal = () => {
  const queryClient = useQueryClient()
  const { addPost } = usePost()
  const createPost = useMutation((data) => addPost(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.post)
      closePostModal()
    },
  })
  const { closePostModal, user } = useBearStore()
  const [addPhoto, setAddPhoto] = useState(false)
  const [caption, setCaption] = useState('')
  const [image, setImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
      setPreviewImage(URL.createObjectURL(e.target.files[0]))
    }
  }
  const submitHandler = async () => {
    const formData = new FormData()
    formData.append('caption', caption)
    formData.append('image', image)
    try {
      await createPost.mutate(formData)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-screen h-screen bg-black bg-opacity-70 z-40 fixed flex justify-center items-center'>
      <div className='w-[500px] min-h-96  rounded-xl bg-[#363639] relative  shadow-sm shadow-white text-white'>
        <button
          onClick={() => closePostModal()}
          className='absolute top-4 right-4  hover:text-red-500'
        >
          <AiOutlineClose size={24} />
        </button>
        <div className='py-3 text-center text-2xl font-semibold border-b-[1px]'>
          Create Post
        </div>
        <div className='flex flex-col p-4 space-y-3'>
          <div className='flex space-x-2 items-center'>
            <Avatar />
            <p className='text-xl capitalize'>{user?.username}</p>
          </div>
          <textarea
            name='caption'
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className={`w-full ${
              addPhoto ? 'h-10 text-sm' : 'h-36 text-xl'
            } bg-transparent  outline-none`}
            placeholder={`What's on you mind, ${user?.username}?`}
          ></textarea>
          {addPhoto && (
            <AddPhoto
              setAddPhoto={setAddPhoto}
              onImageChange={onImageChange}
              previewImage={previewImage}
            />
          )}
          <AddPostOption setAddPhoto={setAddPhoto} />
          <div
            className='w-full py-2 bg-blue-600 hover:bg-blue-500 font-semibold text-center rounded-lg'
            onClick={submitHandler}
          >
            Post
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostModal
