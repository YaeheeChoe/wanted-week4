import { useState, useEffect } from "react";
import axios from "axios";

const useGetSick = (searchTerm) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/sick?q=${searchTerm}`
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    if (searchTerm.trim() !== "") {
      fetchData();
    }
  }, [searchTerm]);
  console.log(data);
  return { data, error };
};

export default useGetSick;
