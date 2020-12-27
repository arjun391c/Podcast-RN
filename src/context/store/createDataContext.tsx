import React, { createContext, useReducer} from "react"
import logger from 'use-reducer-logger'

type returnContext = {
    Context: any,
    Provider: React.FC
}

const createDataContext = (reducer: any, actions: object, defaultValue: object): returnContext => {
    
    const Context = createContext< any | null >(null)

    const Provider: React.FC = ({ children }) => {
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