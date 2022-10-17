import React from 'react';
import {Link, Outlet} from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <header>
                <Link to="/">home</Link>
                <Link to="/posts">blog</Link>
                <Link to="/about">about</Link>
            </header>
            <Outlet />
        </>
    );
};