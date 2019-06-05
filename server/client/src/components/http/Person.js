import React , {Component} from "react";
import axios from "axios";

export default class Person extends Component {

    state = {
        data:[],
        loaded: 0,
    };

    componentDidMount() {
      axios.get("/person")
          .then(res => {
              let {data} = res.data;
              this.setState({data:data,loaded:1});
          })
          .catch(err => console.log("ERR"));
    };

    render(){
        const {data,loaded} = this.state;
        return (
            loaded >= 0 ?
            <div>
                <h1>Test</h1>
                <ol>
                    {data.map(({_id,name}) => <li key={_id}>{name}</li>)}
                </ol>
            </div>
                :
                <div>
                    <h1>Empty Database</h1>
                </div>
        );
    }

}

