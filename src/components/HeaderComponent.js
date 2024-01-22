import { LOGO_URL } from "../utils/constants"
import { useState } from "react"

const HeaderComponent = () => {
    const [loginBtn,setLoginBtn] = useState('Login')
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>

            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                <button onClick={()=>{
                    loginBtn === 'Login' ? setLoginBtn('Logout') : setLoginBtn('Login') 
                }}>{loginBtn}</button>
                </ul>
            </div>

        </div>
    )
}

export default HeaderComponent