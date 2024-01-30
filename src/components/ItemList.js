import { REST_MENU_ITEM_IMG_URL } from "../utils/constants"

const ItemList = ({ items }) => {   
    return (
        <div>
            {
                items.map((item) => (
                    <div className="flex justify-between p-5 m-2 border-b-2" key={item.card.info.id}>
                        <div className="w-80">
                            <span className="font-bold text-slate-700 inline-block pb-1">{item.card.info.name}</span>
                            <br></br>
                            <p className="font-semibold text-slate-700 mb-5">Rs.{(item.card.info.price || item.card.info.defaultPrice)/100}</p>
                            <p className="text-xs text-slate-600 break-words">{item.card.info.description}</p>
                        </div>
                        <div className="relative my-auto">
                            <img className="w-[200px] h-[150px] object-cover rounded-lg" alt="Item image" src={REST_MENU_ITEM_IMG_URL+item.card.info.imageId}/>
                            <button className="absolute top-[7rem] left-0 right-0 bg-slate-50 w-fit m-auto py-1 px-8 border-slate-400 border text-sm rounded-lg text-green-600 font-bold hover:border-green-500">ADD</button>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default ItemList