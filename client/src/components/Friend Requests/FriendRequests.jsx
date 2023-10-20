import React from 'react'
import Request from './Request'

const FriendRequests = () => {
  return (
    <div className='w-full pb-3 border-b-[1px]'>
      <div className='w-full flex justify-between items-center mb-3'>
        <h1 className='text-gray-300 text-lg font-semibold'>Friend Requests</h1>
        <p className='text-blue-400'>See all</p>
      </div>
      <div className='space-y-3'>
        {requestList.map((request, index) => (
          <Request key={index} {...request} />
        ))}
      </div>
    </div>
  )
}
const requestList = [
  {
    username: 'Selena Gomez',
    userImage:
      'https://lh6.googleusercontent.com/-kicjopXs1ck/AAAAAAAAAAI/AAAAAAAAAEc/Eb5c3VlhwtY/photo.jpg',
    mutualFriends: [
      'https://th.bing.com/th/id/OIP.PPPDc5NznOf1wLo6F5xxgQAAAA?pid=ImgDet&rs=1',
      'https://th.bing.com/th/id/OIP.CLkpz3U-PwN31iLD-7KJWgAAAA?pid=ImgDet&rs=1',
    ],
  },
  {
    username: 'Tom holland',
    userImage:
      'https://th.bing.com/th/id/OIP.a-C1KR2htNISmmYhhQewGAHaJ_?pid=ImgDet&rs=1',
    mutualFriends: [
      'https://th.bing.com/th/id/OIP.FaMJyLzS9hDvY7CuWIw_ZAHaHa?pid=ImgDet&rs=1',
      'https://th.bing.com/th/id/OIP.tLHlJ_feEXX7uI-JnyF1HwHaJI?pid=ImgDet&rs=1',
    ],
  },
]
export default FriendRequests
