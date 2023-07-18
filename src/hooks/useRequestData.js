import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";

const useRequestData = (path) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
      
    axios
      .get(`${BASE_URL}/${path}`)

      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })

      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }, []);

  return [data,loading,error];
};

export default useRequestData;
