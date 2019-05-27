import React, {Component} from "react";
import axios from "axios";

export default class User extends Component {

    state = {
        loaded: 0,
        accounts: [],
    };

    componentDidMount() {
        axios.get("/user")
            .then(res => {
                const {accounts} = res.data;
                this.setState({accounts:accounts,loaded: 1});
            })
            .catch(err => console.log("Err"));
    }


    render(){
        return (
            <div>
                {this.state.accounts.map(e => <p key={e._id}>{e.name}</p> )}
            </div>
        );
    }


}