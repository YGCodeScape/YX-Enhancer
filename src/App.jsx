import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center border-2 border-red-600'>
        {/* header */}
        <div className="header border-2 flex flex-col gap-2 items-center ">
          <h1 className="text-[2rem] ">YX-ENHANCER</h1>
          <p className="text-[1.2rem] font-bold  ">Upload your image and let AI enhance it to you in seconds.</p>
        </div>
        <Home />

        {/* footer */}
        <div className="footer border-2 border-red-600'">
          <p className="">Powered by YGCodeScape</p>
        </div>

    </div>
  )
}

export default App

// header with title and p tag
        // <div className="header text-center mb-8 leading-8 uppercase ">
        //     <h1 className='text-4xl font-bold '>YX-Enhancer</h1>
        //      <p className='text-[1.1rem] font-bold capitalize' >Upload your image and let AI enhance it to you in seconds.</p>
        // </div>

        // <div className='footer-d '>
        //     <p className="text-lg">Powered by YGCodeScape</p>
        // </div>