import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SearchBar} from 'react-native-elements'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  _onChangeText = async ( text ) => {
    this.setState({searchText:text});
    let movies = await ApiRequest.search(text);
    stores.movies.dispatch({type:SET_SEARCH_MOVIES, payload:movies});
    this.setState({movie:movies});
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
            value={this.state.searchText}
            containerStyle={{}}
            showLoading
            platform='ios'
            cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
            placeholder='Search'
            onChangeText={()=>this._onChangeText}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
