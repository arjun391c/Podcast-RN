import React from 'react'
//providers
import {Provider as PlayerProvider} from './reducers/playerReducer'

const Store = (props) => {
    return (
        <PlayerProvider>
            {props.children}
        </PlayerProvider>
    )
}

export default Store
