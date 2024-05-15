import React from 'react'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader';


const HeaderComponent = () => {

  return (
    <header className='overflow-hidden'>
      <DesktopHeader />
      <MobileHeader />
    </header>
  )
}

export default HeaderComponent