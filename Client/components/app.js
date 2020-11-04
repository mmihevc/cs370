import React, {Component} from "react";

import {TextField} from "@material-ui/core";
import {sendServerRequest} from "./restfulAPI";


export default class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '200px'}}>
                <form  onSubmit={this.handleChange}>
                    <h2>What word would you like to search for in the script?</h2>
                    <TextField
                        id='outlined-basic'
                        label='Search'
                        varient='outlined'
                        id='search'
                        onChange={()=> {this.setState({searchTerm :  document.getElementById('search').value})}}
                    />
                </form>
            </div>
        );
    }

    handleChange(event) {
        event.preventDefault();
        sendServerRequest(this.state.searchTerm).then(query => {
            alert(query.body);
        });
    }


}


