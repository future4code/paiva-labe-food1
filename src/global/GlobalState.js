import React from 'react'
import useRequestData from '../hooks/useRequestData'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
    const token = {
        auth: localStorage.getItem("token")
    }

    const {data: profile} = useRequestData({}, `/profile`, token);
    const {data: address} = useRequestData({}, `/profile/address`, token);
    const {data: orderHistory} = useRequestData({}, `/orders/history`, token);
    const {data: restaurantsInfo} = useRequestData({}, `/restaurants`, token);


    return <GlobalStateContext.Provider value={{address, profile, orderHistory, restaurantsInfo}} >
        {props.children}
    </GlobalStateContext.Provider>
}

export default GlobalState

