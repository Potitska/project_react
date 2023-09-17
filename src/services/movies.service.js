import {axiosService} from "./axios.service";
import {urls} from "../constants";

const moviesService={
    getAll:(page)=>axiosService.get(urls.movie(page)),
    getAllGenres:()=>axiosService.get(urls.genres()),
    searchByMovie:(name)=>axiosService.get(urls.searchMovie(name)),
    getById:(id)=>axiosService.get(urls.movieById(id)),
    getByGenres:(genre_key, page)=>axiosService.get(urls.moviesByGenres(genre_key,page))
}

export {
    moviesService
}