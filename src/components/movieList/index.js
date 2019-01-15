import React, { Component } from 'react';
import {View} from 'react-native';
import {ListItem} from 'react-native-elements';
import {stores} from "../stores";
import {copy} from "../../js/controllers/util";
import {Content} from "native-base";
import TouchableScale from 'react-native-touchable-scale'
import {SET_DELETE_MOVIES} from "../stores/movies/action";

export class MoviesListUI extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: copy(stores.movies.getState()).searchText,
            dataSource : [],
            isReady:false,
            movies:[],
            searchText:''
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({dataSource: nextProps.movies });
    }

    componentDidMount() {
        this.unsubscribe = stores.movies.subscribe(()=>{
            let state = copy(stores.movies.getState()).searchText;
            if(state){
                this.setState({data: state});
            }
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const {data} = this.state;
        return (
            <Content>
                <View>
                    {
                        data.results.map((item, i) => (
                            <ListItem
                                onPress={()=>{this.props.navigation.navigate('MovieMain',{item})}}
                                component={TouchableScale}
                                titleStyle={{
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}
                                subtitleStyle={{ color: 'black' }}
                                chevronColor="black"
                                chevron
                                numberOfLine={1}
                                key={i}
                                leftAvatar={{
                                    containerStyle:{flex: 1, marginLeft: -10, marginTop: 0,height: 240},
                                    activeOpacity:0.7,
                                    size:"xlarge",
                                    rounded: false,
                                    source: {
                                        uri: 'https://image.tmdb.org/t/p/w500/'+item.poster_path }
                                }}
                                title={item.original_title}
                                leftIcon={{ name: item.icon }}
                                subtitle={'Année: '+item.release_date}
                            />
                        ))
                    }
                </View>
            </Content>
        );
    }
}

