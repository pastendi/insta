import React from 'react'
import Avatar from '../Avatar'

const Contact = ({ image, username }) => {
  return (
    <div className='w-full p-2 rounded-lg hover:bg-[#54575d] cursor-pointer flex items-center space-x-2'>
      <div className='flex relative'>
        <Avatar size={12} image={image} />
        <div className='w-3 h-3 rounded-full border-2 border-black absolute right-0 bottom-0 bg-emerald-500 '></div>
      </div>
      <p className='font-semibold'>{username}</p>
    </div>
  )
}

export default Contact
