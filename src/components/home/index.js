import React, { Component } from 'react';
import {Content} from "native-base";
import {MoviesListUI} from "../movieList";
import {SearchBarUI} from "../searchBar";

export class Home extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Content>
                <SearchBarUI/>
                <MoviesListUI navigation={this.props.navigation} searchText={this.state.searchText}/>
            </Content>
        );
    }
}
