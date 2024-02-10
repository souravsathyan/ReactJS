import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurentMenu from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestMenu = () => {
  const { resId } = useParams()
  const restInfo = useRestaurentMenu(resId)

  const [showIndex, setShowIndex] = useState(0)

  if (restInfo === null) {
    return <Shimmer />;
  }

  // extracting data
  const { name, cuisines, avgRating, totalRatingsString, locality, areaName, city } = restInfo.cards[0].card.card.info;
  const categories = restInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (c) =>
      c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )


  return (
    <div className=" mx-[400px] pt-10 flex flex-col items-center ">
      <div className="rest-details flex justify-between w-full pb-5 border-b-2">
        <div className="">
          <h1 className="font-bold text-lg pb-2">{name}</h1>
          <p className="font-medium text-slate-400 text-sm">{cuisines.join(',')}</p>
          <p className="font-medium text-slate-400 text-sm">{locality + ", " + areaName + ", " + city}</p>
        </div>
        <div className=" border-slate-400 border rounded-lg p-2">
          <h4 className="font-semibold text-green-400 text-sm p-1" ><i className="fa-regular fa-star"></i> {avgRating}</h4>
          <hr></hr>
          <h5 className=" text-slate-400 text-xs p-1">{totalRatingsString}</h5>
        </div>
      </div>

      {
        categories.map((c, index) => <RestaurantCategory key={c?.card?.card.title} data={c?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => {
          if (index == showIndex) {
            return setShowIndex(null)
          }
          return setShowIndex(index)
        }
        } />)
      }

    </div>
  );
};

export default RestMenu