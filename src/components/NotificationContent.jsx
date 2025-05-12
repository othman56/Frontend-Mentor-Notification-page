import React from 'react'
import notifications from "../Notifications.json"

const NotificationContent = ({name, img, text, time, post}) => {

  return (

    <div className='flex items-center mt-2 p-2 bg-sky-100/50 rounded-lg'>
      <div>
        <img src={img} alt="Avatar Image" className='size-10 mr-5'/>
      </div>
      <div>
      <div className='flex items-center justify-between w-90'>
          <h3 className='font-bold hover:cursor-pointer hover:text-blue-700 text-xs'>{name} </h3>
          <p className='ml-1 text-gray-600'>{text} </p>
          <p className=' text-gray-600 text-sm font-bold ml-1 hover:cursor-pointer hover:text-blue-700'>{post}</p>
      <div className='p-1 rounded-xl bg-red-700 w-1 ml-2'/>
      </div> 
        <span className='text-xs text-gray-400'>{time}</span>
      </div>
    </div>
  )
}

export default NotificationContent