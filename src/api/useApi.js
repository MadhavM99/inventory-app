import axios from "axios";
import { useEffect, useState } from "react";

export const useApi = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        if (isMounted) {
          setData(res.data);
          setError(null);
        }
        console.log("Fetched data:", res.data);
      } catch (error) {
        if (isMounted) {
          setError(error);
          setData(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
          console.log("Loading done");
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, isLoading, error };
};
