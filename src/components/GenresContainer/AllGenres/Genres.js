import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../../redux/slice/moviesSlice";
import {Genre} from "./Genre";

const Genres = () => {
    const {genres} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieActions.getGenres())
    },[])
    return (
        <div>
            {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};