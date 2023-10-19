import CreatePostOption from '../components/CreatePostOption'
import Feeds from '../components/Feeds'
import LeftHome from '../components/LeftHome/LeftHome'
import RightHome from '../components/RightHome/RightHome'
import { useBearStore } from '../store/store'

const Dashboard = () => {
  const { user } = useBearStore()
  return (
    <div className='w-full mx-auto bg-bgColor text-white'>
      <div className='w-full min-h-screen flex flex-row justify-between'>
        <LeftHome />
        <div className='pt-20 w-[600px]'>
          {user && <CreatePostOption />}
          <Feeds />
        </div>
        <RightHome />
      </div>
    </div>
  )
}

export default Dashboard
