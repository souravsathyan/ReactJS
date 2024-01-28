import { CDN_URL } from "../utils/constants"

const Cards = ({ resData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info
    return (
        <div className='m-4 p-4  w-[280px] bg-slate-200 rounded-xl hover:shadow-xl'>
            <div className="overflow-hidden">
                <img alt="rest-food" className='h-[180px]  hover:scale-110 transition duration-500 cursor-pointer object-cover rounded' src={CDN_URL + cloudinaryImageId} width={"100%"} />
            </div>

            <div className="flex justify-between px-1 mt-2">
                <h4 className="font-bold p-1">{name}</h4>
                <h4 className="bg-green-500 p-1 rounded-lg text-orange-600 font-semibold" ><i className="font-thin fa-solid fa-star"></i>{avgRating}</h4>
            </div>
            <div className="px-1">
                <p className="break-words">{cuisines.slice(0, 3).join(',')}</p>
                <p>{sla.slaString} <i className="fa-regular fa-clock"></i></p>
            </div>
        </div>
    )
}
// it is a higher order component
// it takes the card component and returns an enhanced card component.

export const withProductLabel = (Cards) => {
    return (props) => {
        console.log('in the HO Component' + props)
        return (
            <div>
                <label className="bg-slate-600 p-2 m-2">Free Delivery</label>
                <Cards {...props} /> 
                
            </div>
        )
    }
}

export default Cards