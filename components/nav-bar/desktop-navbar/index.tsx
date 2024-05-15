
import React from 'react'
import PageNav  from './PageNav'
import { Logo } from '@/components/shared-components';


// this is the side bar for large screens (tablets and desktops)
// it is hidden on smaller screens
export const DesktopNavbar = () => {
  return (
    <aside className={`hidden fixed lg:flex px-17px flex-col items-start py-8 min-h-screen bg-primary-50 w-[16rem] xl:w-[19.5rem] h-full`}>
      <Logo imageSize="w-20 h-20" classes="mb-8" />
      <PageNav />
    </aside>
  );
}