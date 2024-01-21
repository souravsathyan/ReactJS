import { CDN_URL } from "../utils/constants"

const CardsComponent = ({ resData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info
    return (
        <div className='res-card'>
            <div className="img-container">
            <img alt="rest-food" className='rest-food' src={CDN_URL + cloudinaryImageId}  />
            </div>
            <h4>{name}</h4>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString} </h4>
        </div>
    )
}

export default CardsComponent