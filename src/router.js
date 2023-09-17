import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, MovieByIdPage, MoviesPage, NotFoundPage} from "./pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index:true,
                element:<MoviesPage/>
            },
            {
                path: 'movies',
                element: <MoviesPage/>
            },
            {
                path: 'genres',
                element: <GenresPage/>
            },
            {
                path: 'details',
                element: <MovieByIdPage/>
            }
        ]
    },
    {
        path:'*',
        element:<NotFoundPage/>
    }
])

