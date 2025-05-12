import React from 'react'
import NotificationContent from './NotificationContent'
import AvatarMark from '../assets/avatar-mark-webber.webp'
import AvatarAngela from '../assets/avatar-angela-gray.webp'
import AvatarJacob from '../assets/avatar-jacob-thompson.webp'
import AvatarRizky from '../assets/avatar-rizky-hasanuddin.webp'
import AvatarKimberly from '../assets/avatar-kimberly-smith.webp'
import AvatarNathan from '../assets/avatar-nathan-peterson.webp'
import AvatarAnna from '../assets/avatar-anna-kim.webp'
import CommentedPicture from "../assets/image-chess.webp"

const NotificationContents = () => {
  return (
    <div className='mt-5'>
      <NotificationContent name="Mark Webber" img={AvatarMark} text=" reacted to your recent post" post="My first tournament today!" time="1m ago"/>
      <NotificationContent name="Angela Gray" img={AvatarAngela} text=" followed you" time="5m ago"/>
      <NotificationContent name="Jacob Thompson" img={AvatarJacob} text="has joined your group" post="Chess Club" time="1 day ago"/>
      
      <div className='flex items-center mt-2 p-2 rounded-lg'>
        <div>
          <img src={AvatarRizky} alt="Avatar Image" className='size-10 mr-5'/>
        </div>
        <div>
        <div className='flex items-center justify-between w-50'>
            <h3 className='font-bold hover:cursor-pointer hover:text-blue-700 text-xs'>Rizky Hassanuddin</h3>
            <p className='ml-1 text-gray-600'> sent you a private message</p>
        </div> 
          <span className='text-xs text-gray-400'>5 days ago</span>
        </div>
        <span className='flex-1 align-bottom w-50'>text</span>
    </div>

    <div className='flex flex-column items-center mt-2 p-2 rounded-lg'>
      <div>
        <img src={AvatarKimberly} alt="Avatar Image" className='size-10 mr-5'/>
      </div>
      <div className=' flex justify-between '>
      <div className='flex-1 items-center justify-between w-90'>
        <div className='flex items-center justify-between w-50'>
            <h3 className='font-bold hover:cursor-pointer hover:text-blue-700 text-xs'>Kimberly Smith</h3>
            <p className='ml-1 text-gray-600'> commented on your picture</p>
        </div>
          <img className='size-8' src={CommentedPicture} alt="commented picture" />
      </div> 
        <span className='text-xs text-gray-400'>5 days ago</span>
      </div>
    </div>
    
    <div className='flex items-center mt-2 p-2 rounded-lg'>
      <div>
        <img src={AvatarNathan} alt="Avatar Image" className='size-10 mr-5'/>
      </div>
      <div>
      <div className='flex items-center justify-between w-50'>
          <h3 className='font-bold hover:cursor-pointer hover:text-blue-700 text-xs w-40'>Nathan Peterson</h3>
          <p className='ml-1 text-gray-600 text-sm'> reacted to your reccent post 5 <b>end-game strategies to increase your win rate</b></p>
      </div> 
        <span className='text-xs text-gray-400'>5 days ago</span>
      </div>
    </div>


    <div className='flex items-center mt-2 p-2 rounded-lg'>
      <div>
        <img src={AvatarAnna} alt="Avatar Image" className='size-10 mr-5'/>
      </div>
      <div>
      <div className='flex items-center justify-between w-90'>
          <h3 className='font-bold hover:cursor-pointer hover:text-blue-700 text-xs'>Anna Kim</h3>
          <p className='ml-1 text-gray-600'> left the group <b className='font-bold hover:cursor-pointer hover:text-blue-700 text-sm'>Chess Club</b> </p>
      </div> 
        <span className='text-xs text-gray-400'>5 days ago</span>
      </div>
    </div>
    </div>
  )
}

export default NotificationContents