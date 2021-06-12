import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';

export default class Page4 extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
        <Text style={styles.text}>欢迎来到Page4</Text>
        <Button
          title={'Open Drawer'}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <Button
          title={'Toggle Drawer'}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        />
        <Button
          title={'Close Drawer'}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
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
