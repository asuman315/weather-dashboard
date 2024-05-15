import React from 'react';
import { DesktopNavbar } from './desktop-navbar';
import {MobileNavBar} from './MobileNavBar';

const NavBarComponent = () => {
  return (
    <nav className=''>
      <DesktopNavbar />
      <MobileNavBar />
    </nav>
  )
}

export default NavBarComponent;