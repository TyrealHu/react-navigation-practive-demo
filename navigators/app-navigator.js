import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {SafeAreaView} from 'react-navigation';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import {
  createDrawerNavigator,
  DrawerNavigatorItems,
} from 'react-navigation-drawer';
import SwitchNavigator from './switch-navigator';
import Page1 from '../pages/page-one';
import Page2 from '../pages/page-two';
import Page3 from '../pages/page-three';
import HomePage from '../pages/home-page';
import {Button, Text, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Page4 from '../pages/page-four';
import Page5 from '../pages/page-five';

const DrawerNav = createDrawerNavigator(
  {
    Page4: {
      screen: Page4,
      navigationOptions: {
        drawerLabel: 'Page4',
        drawerIcon: ({tintColor, focused}) => (
          <MaterialIcons name={'drafts'} size={24} style={{color: tintColor}} />
        ),
      },
    },
    Page5: {
      screen: Page5,
      navigationOptions: {
        drawerLabel: 'Page5',
        drawerIcon: ({tintColor, focused}) => (
          <MaterialIcons
            name={'move-to-inbox'}
            size={24}
            style={{color: tintColor}}
          />
        ),
      },
    },
  },
  {
    contentComponent: props => (
      <ScrollView style={{backgroundColor: '#098', flex: 1}}>
        <SafeAreaView forceInset={{top: 'always'}}>
          <DrawerNavigatorItems {...props} />
        </SafeAreaView>
      </ScrollView>
    ),
    contentOptions: {
      activeTintColor: 'white',
    },
  },
);

const MaterialTopTabNavigator = createMaterialTopTabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: 'Page1',
      },
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <Text style={{color: focused ? 'orange' : 'grey'}}>Page2</Text>
        ),
      },
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        tabBarLabel: 'Page3',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
    },
  },
);

const BottomTabNavigator = createBottomTabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: 'Page1',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons name={'ios-home'} size={26} style={{color: tintColor}} />
        ),
      },
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <Text style={{color: focused ? 'orange' : 'grey'}}>Page2</Text>
        ),
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={'ios-people'}
            size={26}
            style={{color: focused ? 'orange' : 'grey'}}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
    },
  },
);

export const AppStackNavigator = createStackNavigator(
  {
    HomePage: {
      screen: HomePage,
    },
    DrawerNav: DrawerNav,
    SwitchNavigator: SwitchNavigator,
    MaterialTopTabNavigator: {
      screen: MaterialTopTabNavigator,
      navigationOptions: {
        title: '顶部导航',
      },
    },
    BottomTabNavigator: {
      screen: BottomTabNavigator,
      navigationOptions: {
        title: '底部导航',
        header: null,
      },
    },
    Page1: {
      screen: Page1,
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params && navigation.state.params.name}`,
      }),
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        title: 'Page2',
      },
    },
    Page3: {
      screen: Page3,
      navigationOptions: props => {
        const {navigation} = props;
        const {state, setParams} = navigation;
        const {params = {}} = state;
        return {
          title: params.name ? params.name : 'Default Page3',
          headerRight: (
            <Button
              title={params.mode ? '保存' : '编辑'}
              onPress={() => {
                setParams({mode: params.mode === 'edit' ? '' : 'edit'});
              }}
            />
          ),
        };
      },
    },
  },
  {
    defaultNavigationOptions: {},
  },
);
