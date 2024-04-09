import React, { createContext, useState } from "react";
import '../styles/globals.css'; // Importing global styles (including Tailwind CSS)
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import AlertComponent from "@/components/shared-components/AlertComponent";

export const WeatherContext = createContext<any>(null);

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [data, setData] = useState<any>({myData: 'Hello World', unit: 'metric'}); // global state to store weather data and other app data
    const [alert, setAlert] = useState<{type: string, msg: string}>({
        type: '',
        msg: '',
    }); // alert message to be displayed to the user
    const [isLoading, setIsLoading] = useState<boolean>(false); // loading state to show when data is being fetched from the API

  return (
    // Wrap the layout around the Component which represents the active page
    <WeatherContext.Provider value={{
        data,
        setData,
        alert,
        setAlert,
        isLoading,
        setIsLoading,
    }}>
      <Layout>
        <AlertComponent />
        <Component {...pageProps} />
      </Layout>
    </WeatherContext.Provider>
  );
};

export default MyApp;
