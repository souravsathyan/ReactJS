import { useState, useEffect } from 'react';
import { REST_API } from './constants';

const useRestList = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
      fetchData();
    }, []);
    
    const fetchData = async () => {
      const data = await fetch(
        REST_API
      );
      const json = await data.json();
      const dataRes =await json.data.cards[4];
      console.log(json)
      
      const { card: { card: { gridElements: { infoWithStyle: { restaurants } } } } } = dataRes;
      setListOfRestaurents(restaurants);
      setFilteredRestaurants(restaurants)
    };

  return [listOfRestaurents,filteredRestaurants];
};

export default useRestList;