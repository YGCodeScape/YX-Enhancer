import React from 'react'
import ImgPreview from './ImgPreview'
import ImgUpload from './ImgUpload'

const Home = () => {
  return (
    <div className='w-full h-full' >
        <ImgUpload />
        <ImgPreview />
    </div>
  )
}

export default Home