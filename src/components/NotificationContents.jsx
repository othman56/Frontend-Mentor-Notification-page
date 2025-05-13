import React from 'react'
import AvatarMark from '../assets/avatar-mark-webber.webp'
import { notifications } from '../Constants'


const NotificationContents = () => {
  return (
    <>
      {notifications.map(({id, name, text, post, image, isRead, msgContent, time}) => {
        return <div key={id} id={id} className='mt-1'>
          <div className='flex p-2 gap-2 rounded-md bg-sky-100/50'>
            <div className='notification_image'><img className='size-6' src={AvatarMark} alt="Profile" /></div>
            <div className='flex-1 items-center justify-around leading-[10px]'>
              <div className=''>
                <p className='flex items-center text-[7px] text-gray-400'>
                  <span className='text-[8px] font-bold text-black hover:text-blue-700 hover:cursor-pointer mr-[2px]'>
                    {name} </span>
                  {text}
                  <span className='text-[7px] font-bold text-gray-500 hover:cursor-pointer ml-1 hover:text-blue-700'>
                    {post}
                  </span>
                  {isRead === false ? (<div className='size-1 rounded-lg bg-red-700 ml-[2px]' />) : null}
                </p>
              </div>
              <div>
                <span className='text-[8px] text-gray-400'>{time}</span>
              </div>
              <div className='mt-1'>
                {msgContent && (<p className='text-[8px] text-gray-700 border p-2 hover:cursor-pointer'>{msgContent}</p>)}
              </div>
            </div>
          </div>
        </div>
      }
      )}
    </>
  )
}

export default NotificationContents