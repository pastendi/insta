const Avatar = ({ size = 10, image = null }) => {
  return (
    <div
      className={`w-${size} h-${size} rounded-full bg-slate-400 overflow-hidden`}
    >
      {image && <img src={image} alt={image} className='object-center' />}
    </div>
  )
}

export default Avatar
