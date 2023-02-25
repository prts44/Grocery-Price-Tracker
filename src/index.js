import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home.js';
import Details from './pages/Details.js';
import Manage from './pages/Manage.js';
import Header from './components/Header.js';
import AddItemForm from './components/AddItemForm.js';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/items/:id",
        element: <Details />
    },
    {
        path: "/manage",
        element: <Manage />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header />
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
