import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='w-full mx-auto bg-bgColor text-white'>
      <div className='w-full min-h-screen flex flex-row'>
        <div className='w-80'>User Options</div>
        <div className='flex-1 px-20'>
          <Outlet />
        </div>
        <div className='w-80 '>Contacts/followers</div>
      </div>
    </div>
  )
}

export default Layout
