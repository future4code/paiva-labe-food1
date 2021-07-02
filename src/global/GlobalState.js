import React, {useState} from 'react'
import GlobalStateContext from './GlobalStateContext'
import useRequestData from '../hooks/useRequestData'
import { useParams } from 'react-router-dom'


const GlobalState = (props) => {

    /* const [order, setOrder] = useState({
        idRest: "",
        products: []
    }) */
    const [order, setOrder] = useState([])
    console.log(order)
    
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InluRVFMZGVlU0xOVWF6YmZvc0RLIiwibmFtZSI6IlJhcHBpNCBUZXN0ZSBDb20gRW5kZXJlw6dvIiwiZW1haWwiOiJyYXBwaTR0ZXN0ZV9jb21fZW5kZXJlY29AZnV0dXJlNC5jb20iLCJjcGYiOiI5OTkuNjY2LjMzMy01NyIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBCcmFzaWxlaXJvIENvcmRpbGhlaXJvLCA2NTYsIDE1NiAtIEpvc2VmaW5hIEFwYXJlY2lkYSIsImlhdCI6MTYyNDk5Mjg4MH0.FFw5Ii3wgloj8fFeygPuMsr5uCTnO3N6CSDupXbHRl4"
  
    

    return <GlobalStateContext.Provider value={{order, setOrder}} >
        {props.children}
    </GlobalStateContext.Provider>
}

export default GlobalState

