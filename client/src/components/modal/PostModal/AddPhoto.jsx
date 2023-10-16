import { AiOutlineClose } from 'react-icons/ai'
import { FaPhotoVideo } from 'react-icons/fa'

const AddPhoto = ({ setAddPhoto, onImageChange, image }) => {
  return (
    <div className='w-full p-2 shadow-white shadow-sm flex justify-between items-center rounded-lg relative'>
      {image && (
        <div className='absolute top-4 left-4 z-20'>
          <div className='flex space-x-2 px-3 p-1 bg-white text-black rounded-lg items-center cursor-pointer relative'>
            <FaPhotoVideo /> <span>Add photos/videos</span>
          </div>
          <input
            type='file'
            onChange={onImageChange}
            className='absolute inset-0 w-full h-full opacity-0'
          />
        </div>
      )}

      <button
        onClick={() => setAddPhoto(false)}
        className='absolute top-4 right-4 p-1 rounded-full bg-gray-500 hover:bg-gray-700 z-20'
      >
        <AiOutlineClose size={20} />
      </button>
      <div className='w-full h-52 overflow-hidden'>
        {image ? (
          <img
            alt='preview image'
            src={image}
            className='w-full h-auto object-contain'
          />
        ) : (
          <div className='w-full h-full flex justify-center items-center rounded-lg cursor-pointer  bg-gray-700 hover:bg-gray-600 relative'>
            <div className=' flex flex-col items-center py-10 '>
              <FaPhotoVideo className='text-5xl p-2 rounded-full bg-gray-500' />
              <p className='text-xl'>Add Photos/Videos</p>
              <p className='text-sm'>or drag and drop</p>
            </div>
            <input
              type='file'
              onChange={onImageChange}
              className='absolute inset-0 z-10 opacity-0'
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default AddPhoto
