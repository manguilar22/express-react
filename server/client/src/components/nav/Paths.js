import React , {Component} from "react";
import {Route,Switch} from "react-router-dom";

import Home from "../pages/Home";
import Pet from "../http/Pet";
import Person from "../http/Person";
import User from "../http/User";

export default class Paths extends Component {
    render() {
        return(
            <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/pet"} component={Pet}/>
            <Route path={"/person"} component={Person}/>
            <Route path={"/user"} component={User}/>
            <Route path={"*"} component={null}/>        /* 404 Not Found */
            </Switch>
        );
    }

}