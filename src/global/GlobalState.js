import React from 'react'
import useRequestData from '../hooks/useRequestData'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {

    const teste = "eu estou no estado global"
    const token = {
        auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IktzczdtVGpweHNVZUFFNTMza1F4IiwibmFtZSI6IkFzdHJvZGV2IEp1bmlvciIsImVtYWlsIjoiYXN0cm9kZXZAZnV0dXJlNC5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0xMyIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiBEb2lzLCAxNywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjI1MDE5MzYxfQ.-bLZvDbge7_QYA-J9C1SjWLV5tqCILzBuTnjP0b_JPQ"
    }

    const {data: profile} = useRequestData({}, `/profile`, token)
    const {data: address} = useRequestData({}, `/profile/address`, token)
    const {data: orderHistory} = useRequestData({}, `/orders/history`, token)


    return <GlobalStateContext.Provider value={{teste, address, profile, orderHistory}} >
        {props.children}
    </GlobalStateContext.Provider>
}

export default GlobalState

