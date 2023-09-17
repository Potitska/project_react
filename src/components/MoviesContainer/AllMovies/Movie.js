import React from 'react';
import {useNavigate} from "react-router-dom";

const Movie = ({movie}) => {
    const navigate = useNavigate();

    const {id, original_title, poster_path} = movie;
    const img_url = `https://image.tmdb.org/t/p/w500${poster_path}`
    return (
        <div>
            <img src={img_url} alt={'Poster'} onClick={() => navigate({pathname: '/details', search: `id=${id}`})}/>
            <div>Name: {original_title}</div>
        </div>
    );
};

export {Movie};