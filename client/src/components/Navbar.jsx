import { useNavigate } from 'react-router-dom'
import appLogo from '../assets/logo.svg'
import { BiSearch } from 'react-icons/bi'

const Navbar = () => {
  const user = localStorage.getItem('user')
  const navigate = useNavigate()
  const signout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }
  return (
    <div className='fixed top-0 w-full h-16 text-white bg-[#434549]'>
      <div className='relative w-full h-full px-6'>
        <div className='h-full flex justify-between items-center'>
          <div className='flex items-center space-x-4'>
            <img src={appLogo} alt='insta logo' className='w-12 h-12' />
            <div className='w-64 h-10 px-4 rounded-3xl bg-[#606163] text-gray-300 flex items-center group'>
              <BiSearch size={24} className='group-focus-within:hidden ' />
              <input
                type='text'
                placeholder='Search Insta'
                className='bg-transparent outline-none flex-1'
              />
            </div>
          </div>
          {user ? (
            <div>
              <button
                className='px-3 py-1 rounded-lg border-solid border-[1px] border-transparent  hover:border-white'
                onClick={() => signout()}
              >
                SignOut
              </button>
            </div>
          ) : (
            <div className='flex justify-start items-center space-x-2'>
              <button
                className='px-3 py-1 rounded-lg border-solid  border-[1px] border-transparent  hover:border-white
            '
              >
                SignIn
              </button>
              <button className='px-3 py-1 rounded-lg border-solid border-[1px] border-transparent  hover:border-white'>
                SignUp
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
