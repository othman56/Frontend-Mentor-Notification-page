import React from 'react'
import NotificationHeader from './NotificationHeader'
import NotificationContents from './NotificationContents'
import {notifications } from '../Constants'


const NotificationWrapper = () => {
  const {id, name, text, post, msgContent, image, time} = notifications
  return (
    <div  className='bg-white shadow-xl rounded-lg mt-6 p-5  w-6/12'>
      <NotificationHeader />
      <NotificationContents id={id} name={name} text={text} post={post} msgContent={msgContent} image={image} time={time}/>
    </div>
  )
}

export default NotificationWrapper