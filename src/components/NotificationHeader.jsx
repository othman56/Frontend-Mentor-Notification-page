const NotificationHeader = ({markAllAsRead, unReadCount}) => {
  return (
    <div className='flex justify-between items-center'>
     
      <div className='flex justify-between items-center'>
        <h3 className='font-bold text-[8px] md:text-[8px] lg:text-[12px]'>Notifications</h3>
        <p className='bg-blue-900 font-bold text-white flex items-center ml-2 p-[8px] text-[8px] rounded-md h-2'>
          {unReadCount}
        </p>
      </div>

      <div>
        <h4 onClick={() => markAllAsRead()} className='md:flex-col lg:flex text-[10px] text-gray-500 hover:cursor-pointer'>Mark all as read</h4>
      </div>
    </div>
  )
}

export default NotificationHeader