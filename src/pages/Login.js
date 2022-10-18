import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useAuth} from '../hook/useAuth';

export const Login = () => {
    const [value, setValue] = React.useState('')
    const {login} = useAuth()

    const location = useLocation()
    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        setValue(e.currentTarget.value)
    }

    const fromPage = location.state.from.pathname || '/'

    const onLoginHandler = () => {
        //replace: true - без возможности возврата назад
        login(value, () => navigate(fromPage, {replace: true}))
    }

    return (
        <div>
            {fromPage}
            <br/>
            <input value={value} onChange={onChangeHandler}/>
            <button onClick={onLoginHandler}>Войти</button>
        </div>
    );
};