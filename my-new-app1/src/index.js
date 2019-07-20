import React from 'react';
import ReactDom from 'react-dom';
import App from './layouts/APP';
import {BrowserRouter,Route} from 'react-router-dom'





ReactDom.render(
    <BrowserRouter>
    <Route component={App}/>
    </BrowserRouter>,
    document.querySelector("#root"),

)