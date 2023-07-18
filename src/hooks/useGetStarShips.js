import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";

const useGetStarShips = () => {
    const [starShipsList, setStarShipsList] = useState([]);


  useEffect(() => {
    axios
      .get(`${BASE_URL}/starships`)
      .then((response) => {
        setStarShipsList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

return starShipsList

};

export default useGetStarShips;