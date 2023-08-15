import { useState, useEffect } from 'react';
import { RequestData } from '../types/request.type';

export const useRequest = <T>(request?: () => Promise<T>): RequestData<T> => {
  const [loading, setLoading] = useState<boolean | undefined>(false);
  const [msgError, setMsgError] = useState<string | undefined>('');
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    let cleanFunction = false;

    if (request) {
      if (!cleanFunction) {
        setLoading(true);
        setMsgError('');
      }

      request()
        .then(response => {
          if (!cleanFunction) {
            setData(response);
            setLoading(false);
          }
        })
        .catch(({ message }: Error) => {
          if (!cleanFunction) {
            setLoading(false);
            setMsgError(message);
          }
        });
    }

    return () => {
      cleanFunction = true;
    };
  }, [request]);

  return { data, msgError, loading };
};
