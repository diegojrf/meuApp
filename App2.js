import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class App2 extends Component {
  render() {
    return (
      // flex: 1 na View principal, deixa a View do tamanho da tela do celular
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        {/* o flex nas outras Views vai determinando o quanto ela ocupará da View principal, que no caso, ocupou a tela toda do celular */}
        <View style={{flex: 1, backgroundColor: 'red'}}></View>
        <View style={{flex: 2, backgroundColor: 'green'}}></View>
        <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
      </View>
    );
  }
}
