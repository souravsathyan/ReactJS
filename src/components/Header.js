import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import useLocalStorage from "../utils/useLocalStorage"
import useAuth from "../utils/useAuth"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const onlineStatus = useOnlineStatus()
    const navigate = useNavigate()
    const [getLocalStorage] = useLocalStorage("user")
    const [isLoggedIn,setIsLoggedIn] = useAuth()
    
    return (
        <div className='flex justify-between px-[100px] shadow-lg  bg-orange-400'>
            <div className='logo-container my-auto   '>
                <img className='logo w-[100px] rounded-full p-[9px]' src={LOGO_URL} />
            </div>

            {isLoggedIn?(<div>Hi, {getLocalStorage?.username}</div>):""}

            <div className='nav-items'>
                <ul className="flex p-4 m-4">
                    <li className="font-semibold m-2">Online Status : {onlineStatus === true ? '🟢' : "🔴"}</li>
                    <li className="font-semibold m-2" ><Link to="/">Home</Link></li>
                    <li className="font-semibold m-2" ><Link to="/about">About Us</Link></li>
                    <li className="font-semibold m-2" ><Link to="/contact">Contact Us</Link></li>
                    <li className="font-semibold m-2" ><Link to="/grocery">Grocery</Link></li>
                    <li className="font-semibold m-2" >Cart</li>
                    <li className="m-2">
                    {isLoggedIn?(<button className="bg-red-400 font-semibold rounded-lg px-2 py-1" onClick={()=>{
                            setIsLoggedIn(false)
                            localStorage.clear()
                        }}>Logout</button>):(<button className="bg-green-400 font-semibold rounded-lg px-2 py-1" onClick={()=>{
                            navigate('/login')
                        }}>Login</button>)}
                    </li>
                </ul>
                
            </div>

        </div>
    )
}

export default Header