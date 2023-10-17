import Avatar from './Avatar'

const Post = ({ image_url, caption, timestamp, user }) => {
  return (
    <div className='w-full rounded-2xl bg-[#434549]'>
      <header className='p-4 space-y-4'>
        <div className='flex flex-row justify-between items-center'>
          <div className='flex space-x-2 items-center'>
            <Avatar />
            <p className='text-lg'>{user?.username}</p>
          </div>
          <p>close</p>
        </div>
      </header>
      <img
        src={image_url}
        alt={caption}
        className='w-full aspect-video object-cover'
      />
      <footer className='p-4'>
        <h1>{caption}</h1>
      </footer>
    </div>
  )
}

export default Post
