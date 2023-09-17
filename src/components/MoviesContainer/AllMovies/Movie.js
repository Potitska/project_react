import React from 'react';
import {useNavigate} from "react-router-dom";


const Movie = ({movie}) => {
    const navigate = useNavigate();

    const {id, original_title, poster_path} = movie;
    const img_url = `https://image.tmdb.org/t/p/w500${poster_path}`
    return (
        <div style={{display:'inline-block', textAlign:'center', border: '3px solid yellow',fontSize:18, borderRadius:4,margin:10}}>
            <img style={{height:530}} src={img_url} alt={'Poster'} onClick={() => navigate({pathname: '/details', search: `id=${id}`})}/>
            <div>{original_title}</div>
        </div>
    );
};

export {Movie};