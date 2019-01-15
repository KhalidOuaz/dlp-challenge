import React, { Component } from "react";
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import {Home} from "../../components/home";
import {CardMovie} from "../../components/movie";


const NavStack = createStackNavigator({
    HomeMain: {
        screen: Home,
    },
    MovieMain: {
        screen: CardMovie,
    },
});
const opts = {
    header: {
        visible: false
    }
}
const App = createAppContainer(NavStack,opts);

export default App;

