import Contacts from '../Contacts/Contacts'
import FriendRequests from '../Friend Requests/FriendRequests'

const RightHome = () => {
  return (
    <div className='w-80 p-4 pt-20'>
      <FriendRequests />
      <Contacts />
    </div>
  )
}

export default RightHome
