import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slice/moviesSlice";
import {Movie} from "../../components";

const PageMovieByGenre = () => {
    const link = useParams();

    const {movieByGenres} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieActions.getMovieByGenre(link.id))
    },[dispatch,link])

    return (
        <div>
            {movieByGenres.map(value=><Movie key={value.id} movie={value}/>)}
        </div>
    );
};

export {PageMovieByGenre};