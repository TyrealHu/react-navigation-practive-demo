import * as React from 'react';
import {Button, View, Text, StyleSheet, TextInput} from 'react-native';

export default class Page3 extends React.Component {
  render() {
    const {navigation} = this.props;
    const {state, setParams} = navigation;
    const {params} = state;
    let showTest = params && params.mode === 'edit' ? '正在编辑' : '编辑完成';
    return (
      <View style={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
        <Text style={styles.text}>欢迎来到Page3</Text>
        <Text style={styles.showText}>{showTest}</Text>
        <Button
          title={'Go Back'}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setParams({name: text});
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
  input: {
    height: 50,
    borderWidth: 1,
    marginTop: 10,
    borderColor: 'black',
  },
  showText: {
    marginTop: 20,
    fontSize: 20,
    color: 'red',
  },
});
