import React, {createContext, useContext} from 'react'
import RootStore from '../stores/RootStore'

const RootStoreContext = createContext<RootStore | null>(null)

const RootStoreProvider: React.FC<{rootStore: RootStore}> = (props) => (
    <RootStoreContext.Provider value={props.rootStore}>
        {props.children}
    </RootStoreContext.Provider>
)

const useRootStore = () => {
    const store = useContext(RootStoreContext)

    if(!store) {
        throw new Error('Forgot to wrap RootStoreProvider')
    }

    return store
}

export {RootStoreProvider, RootStoreContext, useRootStore}