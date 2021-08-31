import React from 'react';
import { Text, Button } from 'react-native';

import { Container } from './styles';

const Home = ({ navigation }) => {
  return (
    <Container>
      <Text>This is the Home Screen!!!</Text>
      <Button
        title='Go to Login'
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </Container>
  );
};

export default Home;
