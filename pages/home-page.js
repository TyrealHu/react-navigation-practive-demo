import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

export default class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerBackTitle: '返回标题',
  };
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'blue', paddingTop: 30}}>
        <Text style={styles.text}>欢迎来到HomePage</Text>
        <Button
          title={'顶部导航'}
          onPress={() => {
            navigation.navigate('MaterialTopTabNavigator');
          }}
        />
        <Button
          title={'底部导航'}
          onPress={() => {
            navigation.navigate('BottomTabNavigator');
          }}
        />
        <Button
          title={'切换导航'}
          onPress={() => {
            navigation.navigate('SwitchNavigator');
          }}
        />
        <Button
          title={'抽屉导航'}
          onPress={() => {
            navigation.navigate('DrawerNav');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
});
