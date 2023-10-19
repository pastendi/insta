import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useBearStore } from '../../store/store'
import Avatar from '../Avatar'
import { FaBell, FaFacebookMessenger } from 'react-icons/fa'
import { CgMenuGridO } from 'react-icons/cg'
import UserOption from './UserOption'
import { useState } from 'react'

const RightMenu = () => {
  const [showUserOption, setShowUserOption] = useState(false)
  const { user } = useBearStore()
  const navigate = useNavigate()
  const toggle = () => {
    setShowUserOption((prev) => !prev)
  }

  return (
    <div className='w-96 flex flex-row-reverse'>
      {user ? (
        <div className='flex justify-center items-center space-x-1'>
          <div className='w-10 h-10 rounded-full flex justify-center items-center bg-[#54575d] hover:bg-[#81848a] cursor-pointer'>
            <CgMenuGridO size={24} />
          </div>
          <div className='w-10 h-10 rounded-full flex justify-center items-center bg-[#54575d] hover:bg-[#81848a] cursor-pointer'>
            <FaFacebookMessenger size={24} />
          </div>
          <div className='w-10 h-10 rounded-full flex justify-center items-center bg-[#54575d] hover:bg-[#81848a] cursor-pointer'>
            <FaBell size={24} />
          </div>
          <div className='relative cursor-pointer'>
            <div onClick={() => toggle()}>
              <Avatar />
            </div>
            {showUserOption && <UserOption />}
          </div>
        </div>
      ) : (
        <div className='flex justify-start items-center space-x-2'>
          <button
            className='px-3 py-1 rounded-lg border-solid  border-[1px] border-transparent  hover:border-white
            '
            onClick={() => navigate('/login')}
          >
            SignIn
          </button>
          <button
            className='px-3 py-1 rounded-lg border-solid border-[1px] border-transparent  hover:border-white'
            onClick={() => navigate('/register')}
          >
            SignUp
          </button>
        </div>
      )}
    </div>
  )
}

export default RightMenu
