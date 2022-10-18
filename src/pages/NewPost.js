import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../hook/useAuth';

export const NewPost = () => {
    const {logout} = useAuth()
    const navigate = useNavigate()

    return (
        <div>
            NewPost
            <button onClick={() => logout(() => navigate('/', {replace: true}))}>Выйти</button>
        </div>
    );
};