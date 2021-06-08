import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default class App3 extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: ""
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){
    this.setState({nome: texto});
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite um texto!"
          underlineColorAndroid='transparent'
          onChangeText={this.pegaNome}
        />

        {this.state.nome.length > 0 ? 
          <Text style={styles.texto}>Bem-vindo {this.state.nome}</Text> : 
          <Text style={styles.texto}></Text>
        }

        
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    padding: 10,
    fontSize: 20
  },
  texto: {
    textAlign: 'center',
    fontSize: 45
  }
});
