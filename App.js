import {AppStackNavigator} from './navigators/app-navigator';
import {createAppContainer} from 'react-navigation';
import SwitchNavigator from './navigators/switch-navigator';

export default createAppContainer(AppStackNavigator);
