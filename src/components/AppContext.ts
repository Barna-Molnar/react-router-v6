import React from 'react'

export type User = {
    userName: string,
    isLoggedIn: boolean
} | undefined

export interface IAppContext {
    user: User | undefined
}

const defaultContext: IAppContext = {
    user: {
        userName: '',
        isLoggedIn: false
    }
}

const AppContext = React.createContext<IAppContext>(defaultContext);

export default AppContext;