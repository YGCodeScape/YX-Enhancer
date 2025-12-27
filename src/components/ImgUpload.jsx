import React from 'react'

const ImgUpload = () => {
  return (
    <div className="flex w-full items-center justify-center">
    <div className="img-up bg-white rounded-lg ">
      <label htmlFor="fileInput" className="block">
        <input type="file" id="fileInput" className="hidden" />
        <p className="text-lg font-medium text-gray-500 cursor-pointer ">Click or Drag to upload your image</p>
      </label>
    </div>
    </div>
  )
}

export default ImgUpload

// one label for 
        // <label htmlFor="fileInput" className='block rounded-lg'>
        //    <input type="file" id="fileInput" className='hidden' />
        //    <p className='text-lg font-medium text-gray-600' >Click or drag to upload your image</p>
        // </label>