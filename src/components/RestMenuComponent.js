import ShimmerComponent from "./ShimmerComponent"
import {useParams} from "react-router-dom"
import useRestaurentMenu from "../utils/useRestaurant";

const RestMenuComponent = () => {
  const {resId} = useParams()
  const restInfo = useRestaurentMenu(resId)

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