import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './nav';
import Landing from './landing';
import Login from './login';
import Register from './register';
import Search from './search';
import Random from './random';
import Footer from './footer';
import './css/shared.css';

export default function Switchboard() {
    return (
        <React.Fragment>
            <Nav></Nav>
            <Router>
                <Switch>
                    <Route exact path='/' component={Landing}></Route>
                    <Route exact path='/login' component={Login}></Route>
                    <Route exact path='/register' component={Register}></Route>
                    <Route exact path='/search' component={Search}></Route>
                    <Route exact path='/random' component={Random}></Route>
                </Switch>
            </Router>
            <Footer></Footer>
        </React.Fragment>
    )
}