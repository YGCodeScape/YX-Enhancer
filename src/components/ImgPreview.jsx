import React from 'react'

const ImgPreview = () => {
  return (
    <div className="img-pre flex gap-5 w-full items-center justify-center ">
      <div className="og-img bg-red-900 w-55 h-80 rounded-xl "></div>
      <div className="en-img bg-red-900 w-55 h-80 rounded-xl"></div>
    </div>
  )
}

export default ImgPreview

// two box, one for original img 2 for en img 
