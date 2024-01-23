import CardsComponent from "./CardComponent"
import { useState } from "react"
import { useEffect } from "react"
import ShimmerComponent from "./ShimmerComponent"
import { Link } from "react-router-dom"

const BodyComponent = () => {
    const [listOfRestaurents, setListOfRestaurents] = useState([])
    const [inputText, setINputText] = useState("")
    const [filteredRestaurant, setFilteredRestaurant] = useState("")

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.516355809395856&lng=76.92165244370699&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json()
        const dataRes = json.data.cards[4]
        const { card: { card: { gridElements: { infoWithStyle: { restaurants } } } } } = dataRes;
        setListOfRestaurents(restaurants)
        setFilteredRestaurant(restaurants)
    }
    useEffect(() => {
        fetchData()
    }, [])


    return listOfRestaurents.length == 0 ? <ShimmerComponent /> : (
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
                            if (inputText == "") {
                                setFilteredRestaurant(listOfRestaurents)
                            }
                            const filteredRestaurant = listOfRestaurents.filter((res) => res.info.name.toLowerCase().includes(inputText.toLowerCase()))

                            setFilteredRestaurant(filteredRestaurant)
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredRes = listOfRestaurents.filter((res) => res.info.avgRating >= 4.2)
                        setFilteredRestaurant(filteredRes)
                    }}
                >Top Rated Restaurents</button>
                <button
                    className="filter-btn"
                    onClick={() => {
                        setFilteredRestaurant(listOfRestaurents)
                    }}
                >Back to Normal</button>
            </div>
            <div className='rest-container'>
                {
                    filteredRestaurant.map((el) => {
                        return <Link 
                        key={el.info.id}
                        to={'/restaurants/'+el.info.id}>
                            <CardsComponent key={el.info.id} resData={el} />
                        </Link>

                    })
                }
            </div>
        </div>
    )
}

export default BodyComponent