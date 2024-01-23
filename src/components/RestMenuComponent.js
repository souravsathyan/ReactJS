import { useState, useEffect } from "react"
import ShimmerComponent from "./ShimmerComponent"
import {useParams} from "react-router-dom"
import { REST_DETAILS_API } from "../utils/constants";

const RestMenuComponent = () => {
  const [restInfo, setRestInfo] = useState(null);
  const {resId} = useParams()
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(REST_DETAILS_API+resId);
    const json = await data.json();
    setRestInfo(json.data);
  };

  if (restInfo === null) {
    return <ShimmerComponent />;
  }

  const { name, cuisines } = restInfo.cards[0].card.card.info;
  const { itemCards } = restInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card

  console.log(restInfo)

  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(',')}</p>
      <ul>
        {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price / 100}</li>)}
      </ul>
    </div>
  );
};

export default RestMenuComponent