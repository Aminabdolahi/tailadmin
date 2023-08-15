'use client'
import { useState } from 'react';
import DropDown from './DropDown';
import SvgAlarm from './svg/SvgAlarm';
import SvgChatAlt from './svg/SvgChatAlt';


const Notification = () => {
  const [alarm, setAlarm] = useState<boolean>(false);

  const chatNotification: number = 10;
  const alarmNotification: number = 5;

  return (
    <div className='relative flex gap-14'>
      <div>
        <button
          className='bg-gray-200 p-2 rounded-full absolute'
          onClick={() => setAlarm(!alarm)}
        >
          <SvgAlarm />
          {alarmNotification > 0 && (
            <div className='absolute -top-1 -right-1 bg-red-500 rounded-full px-1 text-white text-tiny font-extrabold'>
              {alarmNotification}
            </div>
          )}
          <div>

          {alarm ? <DropDown/> : null
                }
                </div>
        </button>
      </div>

      <button className='bg-gray-200 p-2 rounded-full'>
        <SvgChatAlt />
        {chatNotification > 0 && (
          <div className='absolute -top-1 -right-1 bg-red-500 rounded-full px-1 text-white text-tiny font-extrabold'>
            {chatNotification}
          </div>
        )}
      </button>
    </div>
  );
};

export default Notification;