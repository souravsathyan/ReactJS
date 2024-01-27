import CardsComponent from "./CardComponent"
import { useState } from "react"
import ShimmerComponent from "./ShimmerComponent"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import useRestList from "../utils/useRestList"


const BodyComponent = () => {
    const [inputText, setINputText] = useState("")
    const [listOfRestaurents,filteredRes] = useRestList(null)
    const [filteredRestaurants, setFilteredRestaurants] = useState(null);

    const onlineStatus = useOnlineStatus()

    const searchData = (searchInput, restaurents)=>{
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
        return <ShimmerComponent />
    }

    return (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={inputText}
                        onChange={(e) => {
                            setINputText(e.target.value)
                        }}
                    />
                    <button
                        onClick={() => {
                           searchData(inputText,listOfRestaurents)
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredRes = listOfRestaurents.filter((res) => res.info.avgRating >= 4.2)
                        setFilteredRestaurants(filteredRes)
                    }}
                >Top Rated Restaurents</button>
            </div>
            <div className='rest-container'>
                {
                    (filteredRestaurants==null? filteredRes : filteredRestaurants).map((el) => {
                        return <Link
                            key={el.info.id}
                            to={'/restaurants/' + el.info.id}
                        >
                            <CardsComponent key={el.info.id} resData={el} />
                        </Link>

                    })
                }
            </div>
        </div>
    )
}

export default BodyComponent