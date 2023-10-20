import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'
import { useBearStore } from '../../store/store'
import CenterMenu from './CenterMenu'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'

const Navbar = () => {
  const { user } = useBearStore()
  return (
    <div className='fixed top-0 w-full h-16 text-white bg-[#434549] z-30'>
      <div className='relative w-full h-full px-6'>
        <div className='h-full flex justify-between items-center'>
          <LeftMenu />
          {user && <CenterMenu />}
          <RightMenu />
        </div>
      </div>
    </div>
  )
}

export default Navbar
