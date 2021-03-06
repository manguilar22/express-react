import React , {Component} from "react";
import {NavLink} from "react-router-dom";

export default class Navigation extends Component {
    render(){
        return(
            <div>
                <ol>
                    <li><NavLink to={"/"}> Home</NavLink></li>
                    <li><NavLink to={"/account"}>Sign Up</NavLink></li>
                    <li><NavLink to={"/pet"}>Pets</NavLink></li>
                    <li><NavLink to={"/person"}>Persons</NavLink></li>
                    <li><NavLink to={"/user"}>Users</NavLink></li>
                    <li><NavLink to={"/posts"}>Make Posts</NavLink></li>
                </ol>
                </div>
        );
    }
}