import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = ({data,showItems,setShowIndex})=>{
    
    const handleClick = ()=>{
        setShowIndex()
    }

    return (
        <div className="w-full text-left bg-slate-100 shadow-lg p-4 m-2  cursor-pointer"  >
            <div className="flex justify-between" onClick={handleClick}>
            <h5 className=" font-bold">{data.title} ({data.itemCards.length})</h5>
            <i className="fa-solid fa-angle-down" ></i>
            </div>
        
            { showItems && <ItemList items={data.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory