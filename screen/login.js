import React, { Component } from 'react';
import { Container, Card, Content,  Body, Text, Button, Item, CardItem, Input, Icon } from 'native-base';
import { StyleSheet } from 'react-native';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: 'Raul',
      pass: '123456r',
      entrar: 1,
    }
  } //END CONSTRUCTOR
  render(){
  return (
    <Container>
    <Content padder contentContainerStyle={styles.content}>
      <Card>
        <CardItem header bordered>
          <Text style={styles.textCenter}>Inicio de Sesión</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Item inlineLabel>
              <Icon type='FontAwesome' name='user' />
                <Input placeholder='Nombre de Usuario' />
              </Item>
              <Item inlineLabel last>
                <Icon type='FontAwesome' name='lock' />
                <Input placeholder='Contraseña' />
              </Item>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Button primary style={styles.boton}><Text> Ingresar </Text></Button>
        </CardItem>
      </Card>
    </Content>
  </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center', // CENTRAR CONTENIDO
  },
  textCenter: {
    textAlign: 'center', // ALINEAR EL TEXTO
    width: '100%' // OCUPAR EL ANCHO DE CARD
  },
  boton: {
    marginLeft: '60%' // AVENTAR DE LADO DERECHO
  }
});


export default Login;