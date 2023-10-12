import Feeds from '../components/Feeds'

const Dashboard = () => {
  return (
    <div className='w-full mx-auto bg-bgColor text-white'>
      <div className='w-full min-h-screen flex flex-row'>
        <div className='w-80 pt-20'>User Options</div>
        <div className='flex-1 px-20 pt-20'>
          <Feeds />
        </div>
        <div className='w-80 pt-20'>Contacts/followers</div>
      </div>
    </div>
  )
}

export default Dashboard
