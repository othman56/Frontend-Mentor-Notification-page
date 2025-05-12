import React from 'react'
import NotificationHeader from './NotificationHeader'
import NotificationContents from './NotificationContents'

const NotificationWrapper = () => {
  return (
    <div  className='bg-white shadow-xl rounded-lg mt-10 p-5 w-5/6'>
      <NotificationHeader />
      <NotificationContents />
    </div>
  )
}

export default NotificationWrapper