import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRouter from './PrivateRouter';
const MainRoutes = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/signin',
                element:<PrivateRouter> <Login/> </PrivateRouter>
            },
            {
                path:'/register',
                element:<PrivateRouter> <Register/> </PrivateRouter>
            }
        ]
    }
]);
export default MainRoutes;