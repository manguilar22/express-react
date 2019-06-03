import React , {Component} from "react";
import axios from "axios";

import Button from '@material-ui/core/Button';
import MaterialButton from "../material/MaterialButton";
import {NavLink} from "react-router-dom";


export default class Pet extends Component {

    constructor(props) {
        super();
        this.state = {
            data: [],
            loaded: 0
        }
    }

    componentDidMount() {
        axios.get("/pet")
            .then(res => this.setState({data: res.data.data, loaded: 1}))
            .catch(err => console.log("Failed Request"));
    }

    render() {

        const {data, loaded} = this.state;
        console.log(loaded);
        if (0 >= loaded) {
            return (
                <div>
                    {data.map(e => <img width={100} height={100} key={e.image} src={e.image} alt={e.name}/>)}
                </div>
            );
        }else {
            return (
                <div>
                <h1>Empty</h1>
                    <p> Add pets here <NavLink to={"/posts"}>here</NavLink>.</p>
                </div>
            );
        }

    }
}