import Avatar from './Avatar'
import { BiSolidVideos } from 'react-icons/bi'
import { FaPhotoVideo, FaRegSmileWink } from 'react-icons/fa'
import { useBearStore } from '../store/store'

const CreatePostOption = () => {
  const { openPostModal, user } = useBearStore()
  return (
    <div className='w-full rounded-2xl bg-[#434549] p-4 my-4'>
      <div className='flex space-x-2 pb-3 border-b-2  border-b-[#585b61]'>
        <Avatar />
        <div
          className='flex-1 rounded-2xl overflow-hidden px-4 bg-[#54575d] cursor-pointer hover:bg-[#81848a]'
          onClick={() => openPostModal()}
        >
          <div className='w-full h-full flex items-center text-[#cfd3dc]'>{`What's on your mind, ${user?.username}?`}</div>
        </div>
      </div>
      <div className='pt-2 px-6 flex'>
        <div className='flex-1 hover:bg-[#585b61] rounded-2xl cursor-pointer'>
          <div className='flex justify-center items-center space-x-2 py-2 '>
            <BiSolidVideos size={30} color='#f0284a' />{' '}
            <span className='text-lg'>Live video</span>
          </div>
        </div>
        <div className='flex-1 hover:bg-[#585b61] rounded-2xl cursor-pointer'>
          <div className='flex justify-center items-center space-x-2 py-2 '>
            <FaPhotoVideo size={30} color='green' />{' '}
            <span className='text-lg'>Photo/Video</span>
          </div>
        </div>
        <div className='flex-1 hover:bg-[#585b61] rounded-2xl cursor-pointer'>
          <div className='flex justify-center items-center space-x-2 py-2 '>
            <FaRegSmileWink size={30} color='yellow' />{' '}
            <span className='text-lg'>Feeling/Activity</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePostOption
