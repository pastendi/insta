import { leftSidbarOptions } from '../../constants/list'
import { useBearStore } from '../../store/store'
import Avatar from '../Avatar'

const LeftHome = () => {
  const { user } = useBearStore()
  return (
    <div className='w-80 pt-16'>
      <div className='w-full px-2 py-3'>
        <div className='w-full flex items-center space-x-3 p-2 rounded-xl hover:bg-[#54575d] cursor-pointer'>
          <Avatar size={8} />
          <p>{user?.username}</p>
        </div>
        {leftSidbarOptions.map((option, index) => {
          const { icon, text } = option
          return (
            <div
              key={index}
              className='w-full flex items-center space-x-3 p-2 rounded-xl hover:bg-[#54575d] cursor-pointer'
            >
              <img src={icon} alt={text} className='w-8 h-8' />
              <p className=' font-semibold'>{text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LeftHome
