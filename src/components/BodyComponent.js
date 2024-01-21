import CardsComponent from "./CardComponent"
import resList from '../utils/mockData'
import { useState } from "react"


const BodyComponent = () => {
    const [listOfRestaurents, setListOfRestaurents] = useState(resList)
    return (
        <div className='body'>
            <div className='filter'>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredRes = listOfRestaurents.filter((res) => res.info.avgRating >= 4.3)
                        setListOfRestaurents(filteredRes)
                    }}
                >Top Rated Restaurents</button>
                <button
                    className="filter-btn"
                    onClick={() => {
                        setListOfRestaurents(resList)
                    }}
                >Back to Normal</button>
            </div>
            <div className='rest-container'>
                {
                    listOfRestaurents.map((el) => {
                        return <CardsComponent key={el.info.id} resData={el} />
                    })
                }
            </div>
        </div>
    )
}

export default BodyComponent