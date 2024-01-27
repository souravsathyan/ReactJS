import useLocalStorage from "./useLocalStorage"
import {useState, useEffect} from "react"

const useAuth = ()=>{
    const [getLocalStorage] = useLocalStorage("user")
    
    const [isLoggedIn,setIsLoggedIn] = useState(true)

    useEffect(()=>{
        if (getLocalStorage !== null) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
    },[getLocalStorage])
    
    return [isLoggedIn,setIsLoggedIn]
}

export default useAuth