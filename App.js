import React, {Component} from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: 'Diego',
    };

    this.alterarNome = this.alterarNome.bind(this); // Toda função precisa desse bind para que possa ser chamada
  }

  alterarNome(novo) {
    this.setState({
      nome: novo,
    });
  }

  render() {
    let nome = 'Variável de nome';

    return (
      <View style={{marginTop: 20}}>
        <Text>Diego!!!</Text>
        <Text>{nome}</Text>
        <Text>Testando</Text>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 25}}>
          Testando novamente
        </Text>

        <View style={{alignItems: 'center'}}>
          <Rocket largura={370} altura={200} nome="DIEGO FELISBERTO" />
        </View>

        <Button
          title="Trocar Nome"
          onPress={() => this.alterarNome('Otávio')}
        />
        <Text style={{marginTop: 20, color: 'blue', textAlign: 'center'}}>
          {this.state.nome}
        </Text>

        {/* Mais de um estilo, coloca entre colchetes */}
        <Text style={[estilos.area, estilos.centraliza]}>Eu sou o Texto 1</Text>
        <Text style={estilos.textoPrincipal}>Eu sou o Texto 2</Text>
        <Text style={estilos.centraliza}>Eu sou o Texto 3</Text>
        <Text style={estilos.centraliza}>Eu sou o Texto 4</Text>
      </View>
    );
  }
}

class Rocket extends Component {
  render() {
    let img =
      'https://blog.rocketseat.com.br/content/images/2019/03/React-Hooks-Comoutilizar--motivac-o-es-eexemplos-pra-ticos.png';

    return (
      <View>
        <Image
          source={{uri: img}}
          style={{width: this.props.largura, height: this.props.altura}}
        />
        <Text> {this.props.nome} </Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  area: {
    marginTop: 40,
  },
  textoPrincipal: {
    fontSize: 30,
    color: 'green',
  },
  centraliza: {
    textAlign: 'center',
  },
});

export default App;
