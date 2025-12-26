import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4 gap-5 '>
        {/* header */}
        <div className="header text-center mb-8 leading-8 uppercase ">
            <h1 className='text-4xl font-bold '>YX-Enhancer</h1>
             <p className='text-lg text-gray-500 capitalize' >Upload your image and let AI enhance it to you in seconds.</p>
        </div>

        <Home />

        {/* footer */}
        <div className='footer-d '>
            <p className="text-lg text-gray-500">Powered by YGCodeScape</p>
        </div>
    </div>
  )
}

export default App