import React, { Component } from 'react';
import {SearchBar} from 'react-native-elements';
import {ApiRequest} from "../../js/controllers/ApiRequest";
import {SET_SEARCH_MOVIES} from "../stores/movies/action";
import {stores} from "../../components/stores";

export class SearchBarUI extends Component {
    constructor(props){
        super();
        this.state = {
            searchText:''
        }
    }

    _onChangeText = async ( text ) => {
        this.setState({searchText:text});
        let movies = await ApiRequest.search(text);
        stores.movies.dispatch({type:SET_SEARCH_MOVIES, payload:movies});
        this.setState({movie:movies});
    };

    render() {
        return(
            <SearchBar
                containerStyle={{paddingTop: 45}}
                cancelButtonTitle={'Cancel'}
                value={this.state.searchText}
                showLoading
                platform='ios'
                cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                placeholder='Search'
                onChangeText={this._onChangeText}
            />
        );
    }
}
