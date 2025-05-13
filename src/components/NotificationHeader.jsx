import React, { useState } from 'react'

const NotificationHeader = () => {
  const [NotificationCount, setNotificationCount] = useState(3);
  const handleSetNotification = () => {
    if ( NotificationCount > 1) {
      setNotificationCount(0)
    }}
    
  return (
    <div className='flex justify-between items-center'>
     
      <div className='flex justify-between items-center'>
        <h3 className='font-bold text-xs'>Notifications</h3>
        <p className='bg-blue-900 font-bold text-white flex items-center ml-2 p-2 text-xs rounded-md h-2'>
          {NotificationCount}
        </p>
      </div>

      <div>
        <h4 onClick={() => handleSetNotification()} className='flex text-[10px] text-gray-500 hover:cursor-pointer'>Mark all as read</h4>
      </div>
    </div>
  )
}

export default NotificationHeader