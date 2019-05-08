import React,{Component} from "react";


export default class SignUp extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: ""
    };

    firstName = (e) => this.setState({firstName: e.target.value});
    lastName = (e) => this.setState({lastName: e.target.value});
    email = (e) => this.setState({email:e.target.value});
    submit = (e) => {
        const {firstName,lastName,email} = this.state;
        e.preventDefault();
        // Logic Mongoose ...
        this.setState({firstName:""});
        this.setState({lastName:""});
        this.setState({email:""});
    };

    handleFirst = this.firstName.bind(this);
    handleLast = this.lastName.bind(this);
    handleEmail = this.email.bind(this);
    handleSubmit = this.submit.bind(this);

    render(){
        const {firstName,lastName,email} = this.state;
        return (
                <form onSubmit={this.handleSubmit}>
                <label>Name
                    <input type={"text"} onChange={this.handleFirst} value={firstName}/>
                </label>
                    <label>Last Name
                    <input type={"text"} onChange={this.handleLast} value={lastName}/>
                    </label>
                    <label>Email
                    <input type={"text"} onChange={this.handleEmail} value={email}/>
                    </label>
                    <input type={"submit"} value={"Submit"}/>
                </form>
        );
    }
}
