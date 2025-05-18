import React, { useState } from 'react'
import NotificationHeader from './NotificationHeader'
import NotificationContents from './NotificationContents'
import { notificationsData } from '../constants'


const NotificationWrapper = () => {
  const [notifications, setNotifications] = useState(notificationsData)
  const { id, name, text, post, msgContent, read, image, time, sideImg } = notifications

  const markAllAsRead = () => {
    setNotifications((prevNotificationState) => prevNotificationState.map((notification) => (
      { ...notification, read: true }
    )))
  }
  const toggleReadNotification = (id) => {
    setNotifications((prevNotificationState) =>
    prevNotificationState.map((notification) =>
    notification.id === id ?
    { ...notification, read: !notification.read } : notification))
  }

  const unReadCount = notifications.filter((notification) => !notification.read).length

  return (
    <div className='bg-white flex flex-col shadow-xl mx-auto w-11/12 rounded-lg mt-2 p-2 md:p-5 md:w-6/12 md:mt-6'>
      <NotificationHeader markAllAsRead={markAllAsRead} unReadCount={unReadCount} />
      <NotificationContents notifications={notifications} toggleReadNotification={toggleReadNotification} />

    </div>
  )
}

export default NotificationWrapper