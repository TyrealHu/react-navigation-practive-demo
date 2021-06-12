import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

export default class Login extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
        <Text style={styles.text}>登录</Text>
        <Button
          title={'登录'}
          onPress={() => {
            navigation.navigate('Auth');
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
