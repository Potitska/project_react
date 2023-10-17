import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, MovieByIdPage, MoviesPage, NotFoundPage} from "./pages";

import React from "react";
import {PageMovieByGenre} from "./pages/PageMovieByGenre/PageMovieByGenre";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <MoviesPage/>
            },
            {
                path: 'movies',
                element: <MoviesPage/>
            },
            {
                path: 'genres',
                element: <GenresPage/>,
                children: [
                    {
                        path: ':id',
                        element: <PageMovieByGenre/>
                    }
                ]
            },
            {
                path: 'details',
                element: <MovieByIdPage/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
])

