import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Movie from './Movie';
import * as serviceWorker from './serviceWorker';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
{
    path: "/",
    element: <App />,
},
{
    path: "/movies/:movieId",
    element: <Movie>abc</Movie>,
},
]);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
