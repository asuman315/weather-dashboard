import React from 'react';

const LoaderComponent = () => {
    //return <RingLoader size={25} color={'#ffffff'} />
    return (
      <div className="flex items-center justify-center">
        <svg className="animate-spin h-5 w-5 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-35" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v-4a4 4 0 004-4h4zm-2-5.291A7.962 7.962 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-3 2.647z"></path>
        </svg>
         <span className="text-gray-800 ml-3 text-md font-semibold">Processing...</span>
      </div>
    )
  }
  
  export default LoaderComponent;