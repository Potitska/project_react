import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../../redux/slice/moviesSlice";
import {Movie} from "../Movie/Movie";

const Movies = () => {
    const {movies}= useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(()=>{
            dispatch(movieActions.getAll('1'))
    },[])

    return (
        <div>
            {movies.map(movie=><Movie movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {Movies};