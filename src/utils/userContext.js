import { createContext } from "react";
import useLocalStorage from "./useLocalStorage";


const userContext = createContext({
    loggedInUser:'default user'
})

export default userContext