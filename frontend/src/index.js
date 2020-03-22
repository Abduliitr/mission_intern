import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


// assets for this
import './index.css';
import './assets/css/LoginPage.css'
// import App from './App';
import * as serviceWorker from './serviceWorker';

// pages for this
import Index from "./views/Index.js";
import LoginPage from "./views/examples/LoginPage.js";
import VenuePage from "./views/examples/VenuePage.js";
import CalenderPage from "./views/examples/CalenderPage.js";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/index" render={props => <Index {...props} /> } />
            <Route path="/login-page" render={props => <LoginPage {...props} /> } />
            <Route path="/venue-page" render={props => <VenuePage {...props} /> } />
            <Route path="/calender-page" render={props => <CalenderPage {...props} /> } />
            <Redirect to="/index" />
            <Redirect from="/" to="/index" />
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
