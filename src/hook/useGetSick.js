import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useGetSick = (searchTerm, expireTime = 300000) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const cacheRef = useRef({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/sick?q=${searchTerm}`
        );
        const newData = response.data;
        setData(newData);
        cacheRef.current[searchTerm] = {
          data: newData,
          timestamp: Date.now(),
        };
      } catch (error) {
        setError(error);
      }
    };

    const cachedData = cacheRef.current[searchTerm];
    if (cachedData && Date.now() - cachedData.timestamp < expireTime) {
      setData(cachedData.data);
    } else {
      fetchData();
    }
  }, [searchTerm, expireTime]);

  return { data, error };
};

export default useGetSick;
