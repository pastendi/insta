import { FaPhotoVideo, FaUserTag, FaRegSmileWink } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { AiOutlineGif } from 'react-icons/ai'
import { BiDotsHorizontal } from 'react-icons/bi'

const AddPostOption = ({ setAddPhoto }) => {
  return (
    <div className='w-full px-4 py-2 shadow-white shadow-sm flex justify-between items-center rounded-lg'>
      <p>Add to you post</p>
      <div className='flex space-x-1'>
        <FaPhotoVideo
          size={40}
          color='green'
          className='p-1 rounded-full bg-opacity-30 hover:bg-slate-600 cursor-pointer'
          onClick={() => setAddPhoto(true)}
        />
        <FaUserTag
          size={40}
          color='dodgerblue'
          className='p-1 rounded-full bg-opacity-30 hover:bg-slate-600 cursor-pointer'
        />
        <FaRegSmileWink
          size={40}
          color='yellow'
          className='p-1 rounded-full bg-opacity-30 hover:bg-slate-600 cursor-pointer'
        />
        <FaLocationDot
          size={40}
          color='red'
          className='p-1 rounded-full bg-opacity-30 hover:bg-slate-600 cursor-pointer'
        />
        <div className='p-1 rounded-full bg-opacity-30 hover:bg-slate-600 cursor-pointer'>
          <AiOutlineGif size={30} className='bg-emerald-500 rounded-md' />
        </div>
        <BiDotsHorizontal
          size={40}
          className='p-1 rounded-full text-gray-400 bg-opacity-20 hover:bg-slate-600 cursor-pointer'
        />
      </div>
    </div>
  )
}

export default AddPostOption
