
// components/Layout.tsx
import React, {FC, ReactNode} from 'react';
import HeaderComponent from './header';
import NavBarComponent from './nav-bar';

interface AppLayoutProps {
    children: ReactNode;
  }

const Layout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <main className="lg:flex font-urbanist">
      <NavBarComponent />
      <section className={`overflow-hidden w-full `}>
        <HeaderComponent />
        <section className={`max-w-[120rem] lg:ml-[16rem] xl:ml-[19.5rem]`}>
          {children}
        </section>
      </section>
    </main>
  );
};

export default Layout;
