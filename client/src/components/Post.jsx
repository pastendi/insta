import Avatar from './Avatar'
import { AiOutlineClose } from 'react-icons/ai'
import { BiLike, BiComment, BiShare } from 'react-icons/bi'
import {
  thumbsUpIcon,
  loveIcon,
  careIcon,
  hahaIcon,
  sadIcon,
  wowIcon,
  angryIcon,
} from '../assets'
const Post = ({ image_url, caption, timestamp, user }) => {
  return (
    <div className='w-full rounded-2xl bg-[#434549]'>
      <header className='p-4 space-y-4'>
        <div className='flex flex-row justify-between items-center'>
          <div className='flex space-x-2 items-center'>
            <Avatar />
            <p className='text-lg'>{user?.username}</p>
          </div>
          <AiOutlineClose size={24} className='cursor-pointer' />
        </div>
        <p>{caption}</p>
      </header>
      <img
        src={image_url}
        alt={caption}
        className='w-full aspect-video object-cover'
      />
      <footer className='px-4'>
        <div className='border-b-2 border-white py-2 flex justify-between'>
          <div className='flex space-x-3'>
            <div className='w-10 h-6 relative'>
              <img
                src={thumbsUpIcon}
                alt=''
                className='w-6 h-6 absolute left-0 top-0 z-10'
              />
              <img
                src={loveIcon}
                alt=''
                className='w-6 h-6 absolute left-4 top-0'
              />
            </div>
            <p>21</p>
          </div>
          <div className='flex space-x-4'>
            <p>1 Comments</p>
            <p>3 Shares</p>
          </div>
        </div>
        <div className='flex space-x-2 py-2'>
          <div className='flex-1 rounded-lg text-lg py-1 hover:bg-[#53565b] hover:shadow cursor-pointer relative group'>
            <div className='flex w-full h-full justify-center items-center space-x-2 '>
              <BiLike size={24} />
              <p>Like</p>
            </div>
            <div className='absolute bottom-9 -left-1 z-20 hidden group-hover:block'>
              <div className='flex items-center space-x-2 w-80 bg-[#434549] rounded-3xl shadow-sm shadow-gray-500 py-2 px-3'>
                <img
                  src={thumbsUpIcon}
                  alt=''
                  className='w-9 h-9 hover:scale-125'
                />
                <img
                  src={loveIcon}
                  alt=''
                  className='w-9 h-9 hover:scale-125'
                />
                <img
                  src={careIcon}
                  alt=''
                  className='w-9 h-9 hover:scale-125'
                />
                <img
                  src={hahaIcon}
                  alt=''
                  className='w-9 h-9 hover:scale-125'
                />
                <img src={wowIcon} alt='' className='w-9 h-9 hover:scale-125' />
                <img src={sadIcon} alt='' className='w-9 h-9 hover:scale-125' />
                <img
                  src={angryIcon}
                  alt=''
                  className='w-9 h-9 hover:scale-125'
                />
              </div>
            </div>
          </div>
          <div className='flex-1 rounded-lg text-lg py-1 hover:bg-[#53565b] hover:shadow cursor-pointer'>
            <div className='flex w-full h-full justify-center items-center space-x-2'>
              <BiComment size={24} />
              <p>Comment</p>
            </div>
          </div>
          <div className='flex-1 rounded-lg text-lg py-1 hover:bg-[#53565b] hover:shadow cursor-pointer'>
            <div className='flex w-full h-full justify-center items-center space-x-2'>
              <BiShare size={24} />
              <p>Share</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Post
