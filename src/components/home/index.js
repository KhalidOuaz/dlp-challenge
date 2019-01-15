import React, { Component } from 'react';
import { StyleSheet, Text, View,Platform,FlatList ,TouchableHighlight,ActivityIndicator,TouchableOpacity} from 'react-native';
import {Header, Input, SearchBar, ListItem, Button,} from 'react-native-elements';
import {ApiRequest} from "../../js/controllers/ApiRequest";
import {stores} from "../stores";
import {Content} from "native-base";
import {MoviesListUI} from "../movieList";
import {SET_SEARCH_MOVIES} from "../stores/movies/action";

export class Home extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    componentWillReceiveProps(nextProps){}
    componentDidMount() {}
    componentWillUnmount() {}
    _onChangeText = async ( text ) => {
        this.setState({searchText:text});
        let movies = await ApiRequest.search(text);
        stores.movies.dispatch({type:SET_SEARCH_MOVIES, payload:movies});
        this.setState({movie:movies});
    };
    render() {
        return (
            <Content>
                <SearchBar
                    onClear={()=>{alert('clear')}}
                    onCancel={()=>{
                        alert('OnCancel')
                    }}
                    cancelButtonTitle={'Search'}
                    value={this.state.searchText}
                    showLoading
                    platform='ios'
                    cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                    placeholder='Search'
                    onChangeText={this._onChangeText}
                />
                <MoviesListUI navigation={this.props.navigation} searchText={this.state.searchText}/>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        paddingTop: 20
    },
    button:{
        backgroundColor:'red',
        width:'80%',
        height:70
    }

});
