import Avatar from '../Avatar'
import { useBearStore } from '../../store/store'
import { AiFillSetting } from 'react-icons/ai'
import { LiaAngleRightSolid } from 'react-icons/lia'
import { IoLogOut } from 'react-icons/io5'
import { MdFeedback } from 'react-icons/md'
import { BiSolidHelpCircle, BiSolidMoon } from 'react-icons/bi'
import { useAuth } from '../../hooks/useAuth'

const UserOption = () => {
  const { user } = useBearStore()
  const { logout } = useAuth()
  const signout = () => {
    logout()
    navigate('/login')
  }
  return (
    <div className='absolute top-12 right-0 w-96 h-min bg-[#434549] shadow-sm shadow-gray-400 rounded-lg p-2 font-semibold z-50'>
      <div className='p-2 rounded-lg shadow-lg shadow-gray-800'>
        <div className='flex  items-center space-x-2 p-2 rounded-lg hover:bg-[#54575d] cursor-pointer'>
          <Avatar />
          <p>{user?.username}</p>
        </div>
        <div className='w-full h-[1px] bg-slate-300 my-1'></div>
        <div className='flex  items-center space-x-2  p-2 text-blue-500 rounded-lg hover:bg-[#54575d] cursor-pointer'>
          See all profiles
        </div>
      </div>
      <div className='w-full mt-6'>
        <div className='flex justify-between items-center p-2 rounded-lg hover:bg-[#54575d] cursor-pointer'>
          <div className='flex space-x-2 items-center'>
            <div className='w-10 h-10 rounded-full flex justify-center items-center bg-[#81848a]'>
              <AiFillSetting size={24} />
            </div>
            <p>Settings & Privacy</p>
          </div>
          <div>
            <LiaAngleRightSolid size={30} />
          </div>
        </div>
        <div className='flex justify-between items-center p-2 rounded-lg hover:bg-[#54575d] cursor-pointer'>
          <div className='flex space-x-2 items-center'>
            <div className='w-10 h-10 rounded-full flex justify-center items-center bg-[#81848a]'>
              <BiSolidHelpCircle size={24} />
            </div>
            <p>Help & support</p>
          </div>
          <div>
            <LiaAngleRightSolid size={30} />
          </div>
        </div>
        <div className='flex justify-between items-center p-2 rounded-lg hover:bg-[#54575d] cursor-pointer'>
          <div className='flex space-x-2 items-center'>
            <div className='w-10 h-10 rounded-full flex justify-center items-center bg-[#81848a]'>
              <BiSolidMoon size={24} />
            </div>
            <p>Display & accessibility</p>
          </div>
          <div>
            <LiaAngleRightSolid size={30} />
          </div>
        </div>
        <div className='flex justify-between items-center p-2 rounded-lg hover:bg-[#54575d] cursor-pointer'>
          <div className='flex space-x-2 items-center'>
            <div className='w-10 h-10 rounded-full flex justify-center items-center bg-[#81848a]'>
              <MdFeedback size={24} />
            </div>
            <p>Give feedback</p>
          </div>
        </div>
        <div
          className='flex justify-between items-center p-2 rounded-lg hover:bg-[#54575d] cursor-pointer'
          onClick={signout}
        >
          <div className='flex space-x-2 items-center'>
            <div className='w-10 h-10 rounded-full flex justify-center items-center bg-[#81848a]'>
              <IoLogOut size={24} />
            </div>
            <p>Log Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserOption
