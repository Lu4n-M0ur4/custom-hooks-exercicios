import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";

const useGetCharacters = () => {
  const [caractersList, setCaractersList] = useState([]);


  useEffect(() => {
    axios
      .get(`${BASE_URL}/people`)
      .then((response) => {
        setCaractersList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

return caractersList

};

export default useGetCharacters;
