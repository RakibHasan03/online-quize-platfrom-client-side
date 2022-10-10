import React from 'react';
import { Outlet } from 'react-router-dom';
import YourNav from '../Nav/NavBar';


const Root = () => {
    return (
        <div>
            <YourNav></YourNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;