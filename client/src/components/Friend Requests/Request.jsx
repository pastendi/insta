import Avatar from '../Avatar'

const Request = ({ username, userImage, mutualFriends }) => {
  return (
    <div className='w-full flex space-x-2'>
      <Avatar size={12} image={userImage} />

      <div className='flex-1 space-y-3'>
        <div className='flex justify-between'>
          <div className='flex flex-col space-y-2'>
            <p className='font-semibold'>{username}</p>
            <div className='flex space-x-2'>
              <div className='relative w-10'>
                {mutualFriends.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className={`absolute top-0 right-${index * 4} 
                      }`}
                    >
                      <Avatar size={6} image={image} />
                    </div>
                  )
                })}
              </div>
              <p className='text-sm text-gray-400'>4 mutuals friends</p>
            </div>
          </div>
          <div>3w</div>
        </div>
        <div className='flex space-x-2 '>
          <button className='flex-1 rounded-lg bg-blue-500 py-1'>
            Confirm
          </button>
          <button className='flex-1 rounded-lg bg-[#54575d] py-1'>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Request
