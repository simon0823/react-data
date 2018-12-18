import React from 'react';
import Table from "./Table";

export default class App extends React.Component {

    constructor() {
        super();
        this.state = ({
            db : []
        });
        this.exibirCarros();
    }

    exibirCarros() {
        fetch("http://127.0.0.1:8081/my-app/api/")
            .then((response)=>response.json())
            .then((responseJson)=>
                {
                    this.setState({
                        db : responseJson
                    });
                }
            )
    }

    render() {
        return (
            <div>
              <Table arrayCarros={this.state.db}/>
            </div>
        );
    }
}