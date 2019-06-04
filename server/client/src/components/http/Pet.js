import React , {Component} from "react";
import axios from "axios";

import {NavLink} from "react-router-dom";


export default class Pet extends Component {

    state = {
            data: [],
            loaded: 0
        };

    componentDidMount() {
        axios.get("/pet")
            .then(res => this.setState({data: res.data.data, loaded: 1}))
            .catch(err => console.log("Failed Request"));
    }

    render() {
        const {data, loaded} = this.state;
        console.log("Loaded Data:\t",loaded);
        if (loaded === 0) {
            return (
                <div>
                    <h1>Empty</h1>
                    <p> Add pets here <NavLink to={"/posts"}>here</NavLink>.</p>
                </div>
            );
        }else {
            return (
                <div>
                    {data.map(e => <img width={100} height={100} key={e.image} src={e.image} alt={e.name}/>)}
                </div>
            );
        }
    }
}