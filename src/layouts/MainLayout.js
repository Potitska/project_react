import React from 'react';
import {NavbarLayout} from "./NavbarLayout";
import {Outlet} from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <NavbarLayout/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};