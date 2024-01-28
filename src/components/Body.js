import Cards from "./Card"
import { useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import useRestList from "../utils/useRestList"


const Body = () => {
    const [inputText, setINputText] = useState("")
    const [listOfRestaurents, filteredRes] = useRestList(null)
    const [filteredRestaurants, setFilteredRestaurants] = useState(null);

    const onlineStatus = useOnlineStatus()

    const searchData = (searchInput, restaurents) => {
        if (inputText == "") {
            setFilteredRestaurants(restaurents)
        }
        const filteredRestaurant = restaurents.filter((res) => res.info.name.toLowerCase().includes(searchInput.toLowerCase()))

        setFilteredRestaurants(filteredRestaurant)
    }

    if (onlineStatus === false) {
        return (
            <h1>You are Offline, Please check the internet connection</h1>
        )
    }

    if (filteredRes.length == 0) {
        return <Shimmer />
    }

    return (
        <div className='body'>
            
                <div className="flex justify-center  items-center filter h-[250px] bg-slate-900">
                    <input
                        type="text"
                        className="block p-2 w-80 rounded-md border-0  text-gray-900 ring-1 ring-inset"
                        placeholder="Search Restaurant"
                        value={inputText}
                        onChange={(e) => {
                            setINputText(e.target.value)
                            searchData(e.target.value, listOfRestaurents)
                        }}
                    />
                    <button className="text-white bg-orange-400 hover:bg-green-400 hover:text-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ms-4"
                        onClick={() => {
                            searchData(inputText, listOfRestaurents)
                        }}
                    >
                        Search
                    </button>
                </div>
                
            
            <div className='rest-container'>
                
                <div className="px-[100px] py-[10px]">
                    <button
                     className="bg-slate-400 p-2 m-2 rounded-lg shadow-xl"
                     onClick={()=>{
                        const filteredRestaurant  = listOfRestaurents.filter((res)=>res.info.avgRating >=4.3)
                        console.log(filteredRestaurant)
                        setFilteredRestaurants(filteredRestaurant)
                    }} >Top Rated Restaruents</button>
                    <button 
                    className="bg-red-400 p-2 m-2 rounded-lg shadow-xl"
                    onClick={()=>{
                        setFilteredRestaurants(listOfRestaurents)
                    }} >Clear filter</button>
                </div>

                <div className="flex flex-wrap px-[100px]">
                {
                    (filteredRestaurants == null ? filteredRes : filteredRestaurants).map((el) => {
                        return <Link
                            key={el.info.id}
                            to={'/restaurants/' + el.info.id}
                        >
                            <Cards key={el.info.id} resData={el} />
                        </Link>

                    })
                }
                </div>

            </div>
        </div>
    )
}

export default Body