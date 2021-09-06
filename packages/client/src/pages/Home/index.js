import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import DaySlider from '../../components/DaySlider';
import { Container } from './styles';

const Home = ({ navigation }) => {
  return (
    <Container>
      <DaySlider />
      <View
        style={{
          width: 1,
          height: '100%',
          backgroundColor: 'red',
        }}
      />
      <Button onPress={() => navigation.navigate('Login')} text='Reservar' fontSize='24px' />
    </Container>
  );
};

export default Home;
