import React from 'react';

export const LoginContext = React.createContext(null)

export const LoginProvider = ({children}) => {
    const [name, setName] = React.useState(null)

    const login = (name, cb) => {
        setName(name)
        cb()
    }
    const logout = (cb) => {
        setName(null)
        cb()
    }

    const auth = {name, login, logout}

    return (
        <LoginContext.Provider value={auth}>
            {children}
        </LoginContext.Provider>
    );
};