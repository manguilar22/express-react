import React , {Component} from "react";
import axios from "axios";

export default class Random extends Component {

    state = {
        data:[],
        loaded: "NO",
    };

    componentDidMount() {
      axios.get("/person")
          .then(res => {
              let json = res.data;
              let {data} = res.data;
              this.setState({data:data});
          })
          .catch(err => console.log("ERR"));
    };

    render(){
        return (
            <div>
                <h1>Test</h1>
                <ol>
                    {this.state.data.map(e => <li key={e._id}>{e.name}</li>)}
                </ol>
            </div>
        );
    }

}

