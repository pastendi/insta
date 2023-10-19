import { GoHomeFill } from 'react-icons/go'
import { LuUsers } from 'react-icons/lu'
import { PiVideoLight } from 'react-icons/pi'
import { AiOutlineShop } from 'react-icons/ai'
import { HiOutlineUserGroup } from 'react-icons/hi'
const CenterMenu = () => {
  return (
    <div className='flex w-[600px] h-full justify-between'>
      <div className='w-full h-full border-4 border-transparent'>
        <div className='w-full h-full hover:bg-[#53555a] rounded-lg flex justify-center items-center'>
          <GoHomeFill size={30} />
        </div>
      </div>
      <div className='w-full h-full border-4 border-transparent'>
        <div className='w-full h-full hover:bg-[#53555a] rounded-lg flex justify-center items-center'>
          <LuUsers size={30} />
        </div>
      </div>
      <div className='w-full h-full border-4 border-transparent'>
        <div className='w-full h-full hover:bg-[#53555a] rounded-lg flex justify-center items-center'>
          <PiVideoLight size={35} />
        </div>
      </div>
      <div className='w-full h-full border-4 border-transparent'>
        <div className='w-full h-full hover:bg-[#53555a] rounded-lg flex justify-center items-center'>
          <AiOutlineShop size={30} />
        </div>
      </div>
      <div className='w-full h-full border-4 border-transparent'>
        <div className='w-full h-full hover:bg-[#53555a] rounded-lg flex justify-center items-center'>
          <HiOutlineUserGroup size={30} />
        </div>
      </div>
    </div>
  )
}

export default CenterMenu
