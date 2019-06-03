import React , {Component} from "react";
import axios from "axios";

export default class MakePost extends Component {

    state = {
        name: "", type: "", image: "",
    };

    handleName = (e) => this.setState({name:e.target.value});

    handleType = (e) => this.setState({type:e.target.value});

    handleImage = (e) => this.setState({image:e.target.value});

    handleSubmit = (e) => {
        e.preventDefault();
        const {name,type,image} = this.state;
        // Send POST request to /pet
        const data = {name:name,type:type,image:image};
        axios.post("/pet", data);

        this.setState({name:"",type:"",image:""});
    };


    handleName = this.handleName.bind(this);
    handleType =  this.handleType.bind(this);
    handleImage = this.handleImage.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

    render () {
        const {name,type,image} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>What is the name of your pet.</label>
                    <input type={"text"} value={name} onChange={this.handleName} placeholder={"Pet name..."} name={"name"}/>
                    <label>What is the species of your pet.</label>
                    <input type={"text"} value={type} onChange={this.handleType} placeholder={"Cat,Dog,Bird,etc."} name={"type"}/>
                    <label>Do you have a picture </label>
                    <input type={"text"} value={image} onChange={this.handleImage} placeholder={"Link here..."} name={"image"}/>
                    <button type={"submit"}>Submit </button>
                </form>
            </div>
        );
    }
}