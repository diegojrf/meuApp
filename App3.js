import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class App3 extends Component {
  render() {
    return (
      // flex: 1 na View principal, deixa a View do tamanho da tela do celular
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          // alignItems: 'stretch': para o stretch, a flexDirection tem que ser column e a view filha não pode ter um
          // width fixo
        }}>
        {/* o flex nas outras Views vai determinando o quanto ela ocupará da View principal, que no caso, ocupou a tela toda do celular */}
        <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}></View>
      </View>
    );
  }
}
