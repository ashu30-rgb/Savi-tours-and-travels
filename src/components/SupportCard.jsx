import React from 'react'

function SupportCard({image, text}) {
  return (
    <div className='bg-gray-950 flex flex-col justify-center items-center p-8 shadow-lg text-white text-lg lg:text-xl rounded-lg hover:bg-black'>
        <div>
            <img src={image} alt="Support" className='mb-6' />
        </div>
        <span>{text}</span>
    </div>
  )
}

export default SupportCard