import React, { useEffect, useContext } from 'react';
import { WeatherContext } from '../../pages/_app';
import { iconSVGs } from '@/assets/iconSVGs';


/**
 - This is an alert component that is used to display a message to the user
 - It is shown at the top of the page and is fixed
  - It is used to display success, information or error messages
  -  The alert message is cleared after 3 seconds
  - The alert message can be cleared by clicking on the close icon
  - The color of the alert message is determined by the type of message 
 */
const AlertComponent = () => {
  const context = useContext(WeatherContext);
  const { setAlert, alert } = context;
  const { type = '', msg = '' } = alert || {};
  const { infoIcon, checkCircleIcon, xCircleIcon} = iconSVGs;

  useEffect(() => {
   const alertInterval = setTimeout(() => { setAlert({ msg: '', type: '' }) }, 3000); // clear the alert message after 3 seconds
   return () => { clearTimeout(alertInterval) }
  }, [msg, type]);

  const ICON_SIZE = 'w-6 h-6'

  return (
    <div className={` rounded-md bg-green-50 p-4 fixed z-40 left-4 right-4 mx-auto max-w-4xl ${msg === '' ? 'top-[-100px]' : 'top-4'} ${type === 'danger' ? 'bg-error-50' : type === 'success' ? 'bg-success-50' : 'bg-warning-50'} duration-500 ease-in-out`}>
      <div className="flex">
        <div className={`text-sm font-medium ${ICON_SIZE} ${type === 'danger' ? 'text-error-500' : type === 'success' ? 'text-success-700' : 'text-warning-700'}`}>  
          <div className={`${ICON_SIZE}`}>{type === 'success' ? checkCircleIcon : type === 'danger' ? xCircleIcon : infoIcon}</div>
        </div>
        <div className="ml-3">
          <p className={`${type === 'danger' ? 'text-error-700' : type === 'success' ? 'text-success-700' : 'text-warning-700'}`}>{msg}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
            >
              <div className={` ${ICON_SIZE} ${type === 'danger' ? 'text-error-700' : type === 'success' ? 'text-success-700' : 'text-warning-700'}`} onClick={() => setAlert({msg: '', type: ''})}>{xCircleIcon}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
  wW
};

export default AlertComponent;