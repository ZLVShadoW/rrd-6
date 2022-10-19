import React from 'react';
import {Link, Outlet} from 'react-router-dom';

export const About = () => {
    return (
        <>
        <div>
            About page
        </div>
            <ul style={{display: 'flex', listStyle: 'none'}}>
                <li style={{marginRight: 10}}>
                    <Link to={'contacts'}>Contacts</Link>
                </li>
                <li>
                    <Link to={'address'}>Address</Link>
                </li>
            </ul>

            {/*<Routes>*/}
            {/*    <Route path={'contacts'} element={<div>Contacts info</div>} />*/}
            {/*    <Route path={'address'} element={<div>Address information</div>} />*/}
            {/*</Routes>*/}
            <Outlet />
        </>
    );
};