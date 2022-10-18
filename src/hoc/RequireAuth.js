import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {useAuth} from '../hook/useAuth';

export const RequireAuth = ({children}) => {
    const {name} = useAuth()
    const location = useLocation()

    if (!name) {
        return <Navigate to={'/login'} state={{from: location}} />
    }
    return (
        children
    );
};
