import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import {Home} from "../../components/home";
import {CardMovie} from "../../components/movie";


const NavStack = createStackNavigator({
    HomeMain: {
        screen: Home,
        navigationOptions: {
            header: null // Will hide header for HomePage
        }
    },
    MovieMain: {
        screen: CardMovie,
    },
});
const opts = {};
const App = createAppContainer(NavStack,opts);

export default App;

