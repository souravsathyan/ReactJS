import {useEffect,useState} from 'react'
import { REST_DETAILS_API } from './constants'

const useRestaurentMenu =(resId)=>{
    const [restInfo, setRestInfo] = useState(null)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData =async ()=>{
        const data= await fetch(REST_DETAILS_API+resId)
        const json = await data.json()
        setRestInfo(json.data)
    }

    return restInfo
}

export default useRestaurentMenu