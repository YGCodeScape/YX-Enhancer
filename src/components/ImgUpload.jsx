import React from 'react'

const ImgUpload = () => {
  return (
    <div className='IU shadow-lg rounded-2xl w-full max-w-2xl' >
        <label htmlFor="fileInput" className='block rounded-lg'>
           <input type="file" id="fileInput" className='hidden' />
           <p className='text-lg font-medium text-gray-600' >Click or drag to upload your image</p>
        </label>
    </div>
  )
}

export default ImgUpload