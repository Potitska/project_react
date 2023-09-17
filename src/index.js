import React from 'react';
import ReactDOM from 'react-dom/client';

import {App} from './App';
import css from './index.css'
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>

    </div>
);


