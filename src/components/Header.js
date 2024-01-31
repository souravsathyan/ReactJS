import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import useLocalStorage from "../utils/useLocalStorage"
import useAuth from "../utils/useAuth"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import userContext from "../utils/userContext"
import {useSelector} from "react-redux"

const Header = () => {
    const onlineStatus = useOnlineStatus()
    const navigate = useNavigate()
    const [isLoggedIn,setIsLoggedIn] = useAuth()
    const {loggedInUser,setUserName} = useContext(userContext)
    // store
    const cart = useSelector((store)=>store.cart.items)
    
    return (
        <div className='sticky z-10 top-0 flex justify-between px-[100px] shadow-lg  bg-orange-400'>
            <div className='logo-container my-auto   '>
                <img className='logo w-[100px] rounded-full p-[9px]' src={LOGO_URL} />
            </div>

            

            <div className='nav-items'>
                <ul className="flex p-4 m-4">
                    <li className="font-semibold m-2">Online Status : {onlineStatus === true ? '🟢' : "🔴"}</li>
                    <li className="font-semibold m-2" ><Link to="/">Home</Link></li>
                    <li className="font-semibold m-2" ><Link to="/about">About Us</Link></li>
                    <li className="font-semibold m-2" ><Link to="/contact">Contact Us</Link></li>
                    <li className="font-semibold m-2" ><Link to="/grocery">Grocery</Link></li>
                    <li className="m-2 font-bold" ><Link to="/cart">Cart</Link>({cart.length})</li>
                    <li className="m-2">
                    {isLoggedIn?(<button className="bg-red-400 font-semibold rounded-lg px-2 py-1" onClick={()=>{
                            setIsLoggedIn(false)
                            localStorage.clear()
                        }}>Logout</button>):(<button className="bg-green-400 font-semibold rounded-lg px-2 py-1" onClick={()=>{
                            navigate('/login')
                        }}>Login</button>)}
                    </li>
                    {isLoggedIn?(<button className="px-2 h-[2.5rem]  bg-slate-300 rounded-lg">{loggedInUser}<span className="text-xs ms-1">🟢</span></button>):""}
                    
                </ul>
                
            </div>

        </div>
    )
}

export default Header