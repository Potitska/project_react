import React from 'react';
import {MovieByName} from "../../components";
import {Outlet} from "react-router-dom";

const MoviesByNamePage = () => {
    return (
        <div>
            <MovieByName/>

        </div>
    );
};

export {MoviesByNamePage};