import React,{Component} from "react";
import axios from "axios";

export default class SignUp extends Component {

    // name,email,password

    state = { name: "", email: "", password: ""};

    handleName = (e) => this.setState({name:e.target.value});
    handleEmail = (e) => this.setState({email:e.target.value});
    handlePassword = (e) => this.setState({password:e.target.value});

    handleSubmit = (e) => {
       const {name, email, password} = this.state;
       // Axios Post Request
       const data = {name:name,email:email,password:password};
       axios.post("/user",data);
       this.setState({name:"",email:"",password:""});
    };

    handleName = this.handleName.bind(this);
    handleEmail = this.handleEmail.bind(this);
    handlePassword = this.handlePassword.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

    render(){
        const {name,email,password} = this.state;
        return (
            <div>

                <h1>Sign Up</h1>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={"name"}>Name</label>
                    <input type={"text"} value={name} placeholder={"Name..."} onChange={this.handleName} name={"name"}/>
                    <label htmlFor={"email"}>Email</label>
                    <input type={"text"} value={email} placeholder={"Email..."} onChange={this.handleEmail} name={"email"}/>
                    <label htmlFor={"password"}>Password</label>
                    <input type={"password"} value={password} placeholder={"password..."} onChange={this.handlePassword} name={"password"}/>
                    <input type={"submit"} value={"Submit"}/>
                </form>

            </div>
        );
    }
}
