import React from 'react';
import Button from '../../components/Button';
import { Container } from './styles';

const Home = ({ navigation }) => {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Login')} text='Reservar' fontSize='24px' />
    </Container>
  );
};

export default Home;
