import React from 'react';
import Root from '../Log/App/Routes/private/private';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from '../Log/Pages/home/index';
import Login from '../Log/Pages/Login/login';
export default function Log(){
    return(
        <>


            <Login />

        </>
    )
}