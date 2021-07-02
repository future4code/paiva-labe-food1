import React, {useState} from 'react'
import GlobalStateContext from './GlobalStateContext'
import useRequestData from '../hooks/useRequestData'
import { useParams } from 'react-router-dom'


const GlobalState = (props) => {
    const token = {
        auth: localStorage.getItem("token")
    }
    
    const {data: profile, getData: getProfile} = useRequestData({}, `/profile`, token);
    const {data: address} = useRequestData({}, `/profile/address`, token);
    const {data: orderHistory} = useRequestData({}, `/orders/history`, token);
    const {data: restaurantsInfo} = useRequestData({}, `/restaurants`, token);
    const [order, setOrder] = useState([])
    console.log(order)

    return <GlobalStateContext.Provider value={{order, setOrder, address, profile, getProfile, orderHistory, restaurantsInfo}} >
        {props.children}
    </GlobalStateContext.Provider>
}

export default GlobalState

