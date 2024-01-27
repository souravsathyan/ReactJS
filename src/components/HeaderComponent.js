import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import useLocalStorage from "../utils/useLocalStorage"
import useAuth from "../utils/useAuth"
import { useNavigate } from "react-router-dom"

const HeaderComponent = () => {
    const onlineStatus = useOnlineStatus()
    const navigate = useNavigate()
    const [getLocalStorage] = useLocalStorage("user")
    const [isLoggedIn,setIsLoggedIn] = useAuth()

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>

            <div className='nav-items'>
                <ul>
                    <li>Online Status : {onlineStatus === true ? '🟢' : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>

                    <li>
                        {isLoggedIn?(<button onClick={()=>{
                            setIsLoggedIn(false)
                            localStorage.clear()
                        }}>Logout</button>):(<button onClick={()=>{
                            navigate('/login')
                        }}>Login</button>)}
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default HeaderComponent