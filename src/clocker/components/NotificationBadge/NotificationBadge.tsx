import { useContext } from 'react';
import { MdNotificationsNone } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ClockerContext } from '../../context/ClockerContext';

const NotificationBadge = () => {
  const navigate = useNavigate();

  const { notificationData, handleNotificationData } =
    useContext(ClockerContext);

  const viewNotificationn = () => {
    handleNotificationData({
      ...notificationData,
      alert: false,
      open: !notificationData.open,
    });
  };

  const redirectToWorkRecord = () => {
    handleNotificationData({
      open: false,
      message: '',
      alert: false,
    });
    navigate('/work-record');
  };

  console.log(notificationData);

  return (
    <button
      className='relative inline-block'
      onClick={viewNotificationn}
      disabled={!notificationData.alert && !notificationData.open}
    >
      <MdNotificationsNone
        size={notificationData.open ? 35 : 30}
        color={'#ffee01d6'}
        style={{ transition: 'all 0.3s ease' }}
        className={`cursor-pointer ${notificationData.open && 'animate-pulse'}`}
      />
      {notificationData.alert && (
        <div>
          <div className='absolute bottom-6 left-5 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping'></div>
          <div className='absolute bottom-6 left-5 w-2.5 h-2.5 bg-red-500 rounded-full'></div>
        </div>
      )}
      {notificationData.open && (
        <div className='relative'>
          <div className='absolute w-40 h-20 right-12 -bottom-12 p-2  rounded-lg bg-gray-50 border'>
            <div className='relative'>
              <div className='w-6 h-6 bg-gray-50 transform rotate-45 absolute -top-3 right-[-18px] m-2'></div>

              <h2 className='mb-4 ' onClick={redirectToWorkRecord}>
                Tienes nuevos <span className='underline'>turnos</span>{' '}
                asignados
              </h2>
            </div>
          </div>
        </div>
      )}
    </button>
  );
};

export default NotificationBadge;
