import { useState } from 'react';
import { MdNotificationsNone } from 'react-icons/md';

const NotificationBadge = () => {
  const [stopAlert, setStopAlert] = useState(false);
  return (
    <div
      className='relative inline-block'
      onClick={() => setStopAlert(!stopAlert)}
    >
      <MdNotificationsNone size={30} color={'#ffee01d6'} />
      {!stopAlert && (
        <div>
          <div className='absolute bottom-6 left-5 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping'></div>
          <div className='absolute bottom-6 left-5 w-2.5 h-2.5 bg-red-500 rounded-full'></div>
        </div>
      )}
    </div>
  );
};

export default NotificationBadge;
