import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";

import {axiosService, moviesService} from "../../services";


const initialState = {
    movies: [],
    movie: {},
    genres: [],
    movieByName: [],
    movieByGenres: [],
    isLoading: null,
}
const getAll =createAsyncThunk(
    'movieSlice/getAll',
    async(page,thunkAPI)=>{
        try {
            const {data} = await moviesService.getAll(page)
            const {results} = data
            return results
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async (_,thunkAPI)=>{
        try {
            const {data} = await moviesService.getAllGenres()
            const {genres} = data;
            return genres
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)



const getMovieByName = createAsyncThunk(
    'movieSlice/getMovieByName',
    async (name,thunkAPI)=>{
        try {
            const {data} = await moviesService.searchByMovie(name);
            const {results} = data;
            return results
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }

    }
)

const getMovieById = createAsyncThunk(
    'movieSlice/getMovieById',
    async (id,thunkAPI) =>{
        try {
            const {data} = await moviesService.getById(id)
            return data

        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getMovieByGenre = createAsyncThunk(
    'movieSlice/getMovieByGenre',
    async (genre_key,thunkAPI)=>{
        try {
            const {data} = await moviesService.getByGenres(genre_key);
            const {results} = data;
            return results
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action)=>{
            state.movies = action.payload
            state.isLoading = false
        })
        .addCase(getGenres.fulfilled,(state, action) => {
            state.genres = action.payload
        })
        .addCase(getAll.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getMovieByName.fulfilled, (state,action)=>{
            state.movieByName = action.payload
        })
        .addCase(getMovieById.fulfilled, (state, action) => {
            state.movie = action.payload
        })
        .addCase(getMovieByGenre.fulfilled, (state, action) => {
            state.movieByGenres = action.payload
        })
})

const {actions, reducer: movieReducer} = slice;   //this is especially for useDispatch and useSelector

const movieActions={
    ...actions,
    getAll,
    getGenres,
    getMovieByName,
    getMovieById,
    getMovieByGenre
}


export{
    movieReducer,
    movieActions
}
