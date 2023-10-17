import os
import cloudinary.uploader
          
cloudinary.config( 
  cloud_name = "duyg4immh", 
  api_key = "846968816687934", 
  api_secret = "OrpwPp9jYfWe9WM2hImnwhkHJ90" 
)

async def uploadToCloudinary(imagePath:str = 'images/completion_kKrKLa.jpg', filename:str='certificate'):
  result = cloudinary.uploader.upload(imagePath, public_id = filename)
  if(result):
    os.unlink(imagePath)
  return result['secure_url']