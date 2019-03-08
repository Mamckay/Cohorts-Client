import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './component/nav';
import Landing from './component/landing';
import Login from './component/login';
import Register from './component/register';
import Search from './component/search';
import Random from './component/random';
import Footer from './component/footer';

export default function Switchboard() {
    return (
        <React.Fragment>
            <Nav></Nav>
            <Switch>
                <Route exact path='/' component={Landing}></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/register' component={Register}></Route>
                <Route exact path='/search' component={Search}></Route>
                <Route exact path='/random' component={Random}></Route>
            </Switch>
            <Footer></Footer>
        </React.Fragment>
    )
}