import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import PostModal from '../components/modal/PostModal/PostModal'
import { useBearStore } from '../store/store'
const Layout = () => {
  const { showPostModal } = useBearStore()
  return (
    <>
      {showPostModal && <PostModal />}
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout
