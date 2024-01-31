import {useSelector, useDispatch} from "react-redux"
import ItemList from "./ItemList"
import {clearCart} from "../utils/cartSlice"

const Cart = ()=>{
    // sbscribing to store SELECTOR
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()
    const handleClearAction = ()=>{
        dispatch(clearCart())
    }
    
    return (
        <div className="m-4 text-center font-bold text-3xl h-100 w-100">
           <h1>Cart</h1>
           <div className="w-6/12 m-auto">
            <button className="p-2 m-2 rounded-lg text-slate-50 bg-black" 
                onClick={handleClearAction}
            >Clear Cart</button>
                {cartItems.length===0 && <h1>Cart is empty Add items to cart</h1>}
                <ItemList items={cartItems} />
           </div>
        </div>
    )
}

export default Cart