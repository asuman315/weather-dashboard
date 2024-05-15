import { useEffect, useState, useContext } from 'react';
import { MyAppContext } from '@/pages/_app';
import Cookies from 'js-cookie';


/*
  - This hook is used to fetch data from the server. 
    - The hook takes in two arguments, the endPoint and the innitial.
    - The endPoint is the endpoint to fetch data from.
    - The dataProps is the type of data to be fetched.
    - The hook returns the fetched data.
    - Used to fetch data in components where data is needed locally.
 */

export const useFetchData = <T, D = any>({endPoint, initialValue, method, data} : {endPoint : string; initialValue?: [] | {}; method?: string, data?: D}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [responseData, setResponseData] = useState<T>((initialValue ?? []) as T);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/call-external-api', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            endPoint,
            method,
            token: Cookies.get('token'),
            data,
          }),
        });
        const returnedData = await res.json();
        setResponseData(returnedData);
      } catch (err) {
        setError(err as Error);
        console.log("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endPoint]);

  return { data: responseData, isLoading, error };
};

