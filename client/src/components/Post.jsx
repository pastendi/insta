const Post = ({ image_url, caption, timestamp, user }) => {
  return (
    <div className='w-full rounded-2xl bg-[#434549]'>
      <header className='p-4 space-y-4'>
        <div className='flex flex-row justify-between items-center'>
          <div>
            <p>{user?.username}</p>
          </div>
          <p>close</p>
        </div>
        <h1>{caption}</h1>
      </header>
      <img src={image_url} alt={caption} className=' object-contain' />
    </div>
  )
}

export default Post
