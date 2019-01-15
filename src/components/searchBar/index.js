import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SearchBar} from 'react-native-elements';
import {ApiRequest} from "../../js/controllers/ApiRequest";
import {SET_SEARCH_MOVIES} from "../stores/movies/action";
import {stores} from "../../components/stores";


export class SearchBarUI extends Component {
    constructor(props){
        super();
        this.state = {
            searchText:'',
        }
    }

    _onChangeText = async ( text ) => {
        this.setState({searchText:text});
        let movies = await ApiRequest.search('/movie');
        stores.movies.dispatch({type:SET_SEARCH_MOVIES, payload:movies})
        console.log(movies);
    };

    render() {
        return(
            <SearchBar
                value={this.state.searchText}
                containerStyle={styles.container}
                showLoading
                platform='ios'
                cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                placeholder='Search'
                onChangeText={()=>this._onChangeText}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        paddingTop: 20
    },

});
