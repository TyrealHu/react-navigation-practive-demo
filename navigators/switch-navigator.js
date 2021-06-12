import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from '../pages/home-page';
import Login from '../pages/login';

const stackNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
  },
});

const loginStack = createStackNavigator({
  Login: {
    screen: Login,
  },
});

export default createSwitchNavigator({
  Login: loginStack,
  Auth: stackNavigator,
});
