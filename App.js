import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Home} from "./src/components/home";
import MainRouter from './src/js/router/main'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText:'',
      movie : [],
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <MainRouter/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});