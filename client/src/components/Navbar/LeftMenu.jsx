import { appLogo } from '../../assets'
import { BiSearch } from 'react-icons/bi'
const LeftMenu = () => {
  return (
    <div className='w-96 flex items-center space-x-4'>
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
  )
}

export default LeftMenu
