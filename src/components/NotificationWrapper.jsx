import React from 'react'
import NotificationHeader from './NotificationHeader'
import NotificationContents from './NotificationContents'
import {notifications} from '../constants'


const NotificationWrapper = () => {
  const {id, name, text, post, msgContent, read, image, time, sideImg} = notifications
  

  return (
    <div  className='bg-white shadow-xl rounded-lg mt-6 p-5 w-6/12 md:w-50'>
      <NotificationHeader />
      <NotificationContents id={id} name={name} text={text} post={post} read={read} msgContent={msgContent} image={image} time={time} sideImg={sideImg}/>

    </div>
  )
}

export default NotificationWrapper