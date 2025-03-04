import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";

const useGetFilms = () => {
  const [filmsList, setFilmsList] = useState([]);
  

  useEffect(() => {
    axios
      .get(`${BASE_URL}/films`)
      .then((response) => {
        setFilmsList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

return filmsList

};

export default useGetFilms;
