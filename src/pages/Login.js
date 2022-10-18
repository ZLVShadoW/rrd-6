import React from 'react';
import {useLocation} from 'react-router-dom';

export const Login = () => {
    const location = useLocation()

    const fromPage = location.state.from.pathname || '/'

    return (
        <div>
            {fromPage}
        </div>
    );
};