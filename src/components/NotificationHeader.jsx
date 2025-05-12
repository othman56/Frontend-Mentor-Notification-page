import React, { useState } from 'react'
import notifications from "../Notifications.json"

const NotificationHeader = () => {

  const [NotificationCount, setNotificationCount] = useState(3);
  console.log(notifications)
  const handleSetNotification = () => {
    if ( NotificationCount > 1) {
      setNotificationCount(0)
      
    }}
  return (
    <div className='flex justify-between items-center font-plus-jakarta-Sans'>
     
      <div className='flex justify-between items-center'>
        <h2 className='font-bold'>Notifications</h2>
        <p className='bg-blue-900 font-bold font-jakarta-Sans text-white flex items-center ml-3 p-2 text-1xl rounded-md h-5'>
          {NotificationCount}
        </p>
      </div>

      <div>
        <h3 onClick={() => handleSetNotification()} className='flex text-xs text-gray-700 hover:cursor-pointer'>Mark all as read</h3>
      </div>
    </div>
  )
}

export default NotificationHeader