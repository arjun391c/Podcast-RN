import React, {createContext, useReducer} from "react"
import logger from 'use-reducer-logger'

const createDataContext = (reducer, actions, defaultValue) => {
    const Context = createContext()

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(logger(reducer), defaultValue)

        const boundActions = {}

        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        )
    }
    return {Context, Provider}
}

export default createDataContext