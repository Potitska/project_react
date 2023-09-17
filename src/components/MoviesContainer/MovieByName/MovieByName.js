import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import {movieActions} from "../../../redux/slice/moviesSlice";
import {MovieById} from "../MovieById/MovieById";

const MovieByName = () => {
    const location = useLocation();
    const name = new URLSearchParams(location.search).get('name')

    const {movieByName} = useSelector(state => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getMovieByName('name'))
    }, [dispatch])

    if (movieByName.length !== 0) {
        return (
            <div>
                {movieByName.map(movie => <MovieById key={movie.id} movie={movie}/>)}
            </div>
        )
    } else if (movieByName.length === 0) {
        return (
            <div className='not_found'>
                <h1>Not Found Movies</h1>
            </div>
        )
    }
};

export {MovieByName}