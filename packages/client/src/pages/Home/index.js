import React from 'react';
import Button from '../../components/Button';
import { Container } from './styles';

const Home = ({ navigation }) => {
  return (
    <Container>
      <Button text='Reservar' fontSize='25px' />
    </Container>
  );
};

export default Home;
