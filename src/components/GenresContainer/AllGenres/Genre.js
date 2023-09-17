import React from 'react';
import { NavLink} from "react-router-dom";

const Genre = ({genre}) => {
    const {id, name} = genre;
    return (
        <div>
            <NavLink to={`${id}`}>{name}</NavLink>
        </div>
    );
}

export {Genre};