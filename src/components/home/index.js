import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Content} from 'native-base';

export class Home extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    _onChangeText = async ( text ) => {
        this.setState({searchText:text});
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
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        paddingTop: 20
    },

});
