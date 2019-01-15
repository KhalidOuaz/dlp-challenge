import React, { Component } from 'react';
import {Text, View} from 'react-native';
import {Card, Rating} from 'react-native-elements';
import {Content} from "native-base";
import {SET_DELETE_MOVIES} from "../stores/movies/action";
import {Badge} from 'native-base';
export class CardMovie extends Component {

    constructor(props){
        super(props);
        this.state = {
            movie : this.props.navigation.state.params.item

        }
    }

    render() {
        const {movie} = this.state;
        console.log(movie);
        return (
            <Content contentContainerStyle={{flex:1}}>
                {console.log(this.state.movie)}
                <Card
                    imageWrapperStyle={{}}
                    containerStyle={{flex:1}}
                    imageStyle={{height:250}}
                    title={movie.original_title+'(' + movie.release_date.slice(0, 4) + ')'}
                    image={{uri: 'https://image.tmdb.org/t/p/w300'+ movie.poster_path}}>
                    <View/>
                    <Rating
                        imageSize={20}
                        readonly
                        startingValue={movie.popularity}
                        style={{ }}
                    />
                    <View style={{flexDirection: 'row',alignItems:'center'}}>
                        <View/>
                        <Text>Nombre de vote:{''}</Text>
                        <Badge style={{ backgroundColor: 'red',justifyContent:'center',alignItems:'center' }}>
                            <Text>{movie.vote_count}</Text>
                        </Badge>
                    </View>

                    <View style={{flexDirection: 'row',alignItems:'center'}}>
                        <View/>
                        <Text>Date de sortie:{''}</Text>
                        <Badge style={{ backgroundColor: 'green',justifyContent:'center',alignItems:'center' }}>
                            <Text>{movie.release_date}</Text>
                        </Badge>
                    </View>


                    <Text style={{marginBottom: 10}}>
                        Synopsis :{'\n'}
                        {movie.overview}
                    </Text>
                </Card>
            </Content>
        );
    }
}
