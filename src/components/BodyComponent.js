import CardsComponent from "./CardComponent"
import resList from "../utils/mockData"

const BodyComponent = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='rest-container'>
                {
                    resList.map((el) => {
                        return <CardsComponent key={el.info.id} resData={el} />
                    })
                }
            </div>
        </div>
    )
}

export default BodyComponent