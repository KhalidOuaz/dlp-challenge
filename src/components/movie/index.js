import React, { Component } from 'react';
import { StyleSheet, Text, View,Platform,FlatList ,TouchableHighlight,ActivityIndicator,TouchableOpacity} from 'react-native';
import {Header, Input, SearchBar, ListItem, Button,Card,Icon,Rating} from 'react-native-elements';
import {Content} from "native-base";
import TouchableScale from 'react-native-touchable-scale'
import {SET_DELETE_MOVIES} from "../stores/movies/action";

export class CardMovie extends Component {

    constructor(props){
        super(props);
        this.state = {
            movie : this.props.navigation.state.params.item

        }
    }

    componentWillReceiveProps(nextProps){}
    componentDidMount() {}
    componentWillUnmount() {}

    render() {
        const {movie} = this.state;
        return (
            <Content>
                {console.log(this.state.movie)}
                <Card
                    title={movie.original_title+'(' + movie.release_date.slice(0, 4) + ')'}
                    image={{uri: 'https://image.tmdb.org/t/p/w500'+ movie.poster_path}}>
                    <View/>
                    <Rating
                        imageSize={20}
                        readonly
                        startingValue={movie.popularity}
                        style={{ }}
                    />
                    <Text style={{marginBottom: 10}}>
                        {movie.overview}
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' />
                </Card>

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
