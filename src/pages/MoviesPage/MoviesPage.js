import React from 'react';
import {useSelector} from "react-redux";

import {Movies} from "../../components";
import {Outlet} from "react-router-dom";




const MoviesPage = () => {
    const {isLoading} = useSelector(state=>state.movies);
    return (
        <div>
            {isLoading && <h1>Loading....</h1>}
            <Movies/>

        </div>
    );
};

export {MoviesPage};