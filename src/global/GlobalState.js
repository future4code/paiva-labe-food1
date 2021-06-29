import React from 'react'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {

    const teste = "eu estou no estado global"

    return <GlobalStateContext.Provider value={{teste}} >
        {props.children}
    </GlobalStateContext.Provider>
}

export default GlobalState

