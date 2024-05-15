import React, { createContext, useState } from "react";
import '../styles/globals.css'; // Importing global styles (including Tailwind CSS)
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import AlertComponent from "@/components/shared-components/AlertComponent";

export const MyAppContext = createContext<any>(null);

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false); // state to manage the mobile navigation menu [open/close
    const [data, setData] = useState<any>({myData: 'Hello World', unit: 'metric'}); // global state to store weather data and other app data
    const [alert, setAlert] = useState<{ type: string, msg: 'error' | 'warning' | 'success' | '' }>({
        type: '',
        msg: '',
    }); // alert message to be displayed to the user
    const [isLoading, setIsLoading] = useState<boolean>(false); // loading state to show when data is being fetched from the API

  return (
    // Wrap the layout around the Component which represents the active page
    <MyAppContext.Provider value={{
        data, setData,
        alert, setAlert,
        isLoading, setIsLoading,
        isMobileNavOpen, setIsMobileNavOpen,
    }}>
      <Layout>
        <AlertComponent />
        <Component {...pageProps} />
      </Layout>
    </MyAppContext.Provider>
  );
};

export default MyApp;
