import React, { Component } from "react";
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import {Home} from "../../components/home";


const NavStack = createStackNavigator({
    HomeMain: {
        screen: Home,
    },
});

const opts = {
    header: {
        visible: false
    }
};

const App = createAppContainer(NavStack,opts);

export default App;

