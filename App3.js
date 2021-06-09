import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';

export default class App3 extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: "",
      input: "",
      novoNome: ""
    };

    this.pegaNome = this.pegaNome.bind(this);
    this.entrar = this.entrar.bind(this);
  }

  pegaNome(texto){
    this.setState({nome: texto});
  }

  entrar(){
    if(this.state.input.trim() == ""){
      this.setState({novoNome: ""});
      Alert.alert("Atenção", "Digite algo no input!");
    } else{
      this.setState({novoNome: "Olá " + this.state.input});
    }
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

        <TextInput 
          style={styles.input}
          placeholder="Digite um texto!"
          underlineColorAndroid='transparent'
          onChangeText={(texto) => this.setState({input: texto})}
        />
        <Button title="Entrar" onPress={this.entrar} />
        <Text style={styles.texto}>
          {this.state.novoNome}
        </Text>
        
        
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
