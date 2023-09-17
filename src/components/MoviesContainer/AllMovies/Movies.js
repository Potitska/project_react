import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../../redux/slice/moviesSlice";
import {Movie} from "./Movie";
import {NavLink} from "react-router-dom";


const Movies = () => {

    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();


    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        dispatch(movieActions.getAll('1'))
    }, [dispatch])

    return (
        <div>
            <input style={{height:20, width:200}}
                type="text"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Name movie..."
            />
            <NavLink to={{ pathname: '/movies_by_name', search: `?name=${searchValue}` }}>
                <button style={{height:25,background:"yellow", cursor:'pointer'}}>search</button>
            </NavLink>
            <hr/>
            {movies
                .filter((obj) => obj.original_title.toLowerCase().includes(searchValue.toLowerCase()))
                .map(movie => <Movie movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {Movies};