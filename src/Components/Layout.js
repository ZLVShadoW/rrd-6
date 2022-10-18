import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const header = {
    padding: '12px',
    background: '#ccc'
}

const navLink = {
    color: '#000',
    fontWeight: 'bold',
    marginRight: '10px'
}

export const Layout = () => {
    return (
        <>
            <header style={header}>
                <Link style={navLink} to="/">home</Link>
                <Link style={navLink} to="/posts">blog</Link>
                <Link style={navLink} to="/about">about</Link>
            </header>
            <div style={{width: '90%', margin: '16px auto', border: '1px solid #eee', padding: 18}}>
                <Outlet />
            </div>
        </>
    );
};