import React from 'react'

function SupportCard({image, text, hid}) {
  return (
    <a href={hid} className='bg-gray-950 flex flex-col justify-center items-center p-8 shadow-lg text-white text-lg lg:text-xl rounded-lg hover:bg-black cursor-pointer'>
        <div>
            <img src={image} alt="Support" className='mb-6' />
        </div>
        <span>{text}</span>
    </a>
  )
}

export default SupportCard