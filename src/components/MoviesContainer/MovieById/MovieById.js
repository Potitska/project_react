import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../../redux/slice/moviesSlice";

const MovieById = () => {

    const location = useLocation();

    const id = new URLSearchParams(location.search).get('id')

    const {movie} = useSelector(state => state.movies)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getMovieById(id.toString()))
    }, [id, dispatch])

    const {original_language, original_title, poster_path, release_date} = movie
    const img_url = `https://image.tmdb.org/t/p/w500${poster_path}`
    return (
        <div style={{fontSize:17, fontWeight:'bold',display:'flex', alignItems:'center',flexDirection:'column'}}>
            <img style={{height:510}} src={img_url} alt={original_title}/>
            <div>Language: {original_language}</div>
            <div>Release_date: {release_date}</div>
            <div>Name: {original_title}</div>
            <div>Vote_average: {movie.vote_average}</div>
            <div>Budget: {movie.budget}</div>


        </div>
    );
};

export {MovieById};