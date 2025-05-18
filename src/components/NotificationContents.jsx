import React from 'react'

const NotificationContents = ({notifications, toggleReadNotification}) => {
  return (
    <>
      {notifications.map(({id, name, text, post, image, read, msgContent, time, sideImg}) => 
        (
        <div key={id} id={id} className='mt-1' >
          <div onClick={() => toggleReadNotification(id)} className={`flex p-2 gap-2 rounded-md ${!read ? "bg-sky-100/50 hover:cursor-pointer" : "bg-white"}`}>
            <div className='notification_image'><img className='size-6' src={image} alt="Profile" /></div>
            <div className='flex-1 items-center justify-around leading-[10px]'>
              <div className=' flex justify-between items-center'>
                <p className='flex items-center text-[8px] md:text-[8px] text-gray-400 md:text-nowrap md:flex'>
                  <span className='text-[7px] text-nowrap font-bold text-black hover:text-blue-700 hover:cursor-pointer mr-[2px]'>
                    {name} </span> 
                  {text}
                  <span className='text-wrap text-[7px] font-bold text-gray-500 hover:cursor-pointer ml-1 hover:text-blue-700'>
                    {post}
                  </span>
                  {read === false ? (<span className=' p-[4px] rounded-lg bg-red-700 ml-1' ></span>) : null}
                </p>
                <div>
                  {sideImg && <img className='size-6 hover:cursor-pointer' src={sideImg}/>}
                </div>
              </div>
              <div>
                <span className='text-[8px] text-gray-400'>{time}</span>
              </div>
              <div className='mt-1'>
                {msgContent && (<p className='text-[8px] text-gray-700 border p-2 hover:cursor-pointer'>{msgContent}</p>)}
              </div>
            </div>
          </div>
        </div>)
      
      )}
    </>
  )
}

export default NotificationContents