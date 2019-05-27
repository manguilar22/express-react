import React , {Component} from "react";
import axios from "axios";

import Button from '@material-ui/core/Button';
import MaterialButton from "../material/MaterialButton";


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
        return (
            <div>
                <MaterialButton data={data}/>
            </div>
        );
    }
}