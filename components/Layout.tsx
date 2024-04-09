
// components/Layout.tsx
import React, {FC, ReactNode} from 'react';

interface AppLayoutProps {
    children: ReactNode;
  }

const Layout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-urbanist bg-gray-100">
      <header className="bg-primary-50 text-gray-800 font-semibold p-4 text-center">
        Weather Dashboard
      </header>
      <main className="flex-grow container mx-auto px-4">
        {children}
      </main>
      <footer className="bg-primary-50 text-gray-800 font-semibold p-4 text-center">
        Made with ☀️ by Asuman Ssendegeya
      </footer>
    </div>
  );
};

export default Layout;
