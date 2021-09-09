import React from 'react';

import Button from '../../components/Button';
import Plate from '../../components/Plate';

import { Container, PlateList, Reservation } from './styles';

const plates = [
  {
    id: 10,
    title: 'Arroz de Pato',
    type: 'Carne',
    products: ['Arroz Branco', 'Carne de Pato', 'Tomate', 'Chouriço de Carne', 'Toucinho Fumado'],
    allergenic: ['Gluten', 'Sementes Sesamo', 'Pimenta', 'Tomate'],
    kcal: 560,
  },
  {
    id: 11,
    title: 'Bacalhau à Zé do Pipo',
    type: 'Peixe',
    products: ['Bacalhau', 'Batatas Fritas'],
    allergenic: ['Gluten', 'Sementes Sesamo', 'Pimenta', 'Tomate'],
    kcal: 752,
  },

  {
    id: 12,
    title: 'Sopa de Legumes',
    type: 'Sopa',
    products: ['Bacalhau', 'Batatas Fritas'],
    allergenic: ['Gluten', 'Sementes Sesamo', 'Pimenta', 'Tomate'],
    kcal: 752,
  },

  {
    id: 13,
    title: 'Leite de Creme',
    products: ['Leite', 'Creme', 'Canela'],
    allergenic: ['Gluten', 'Sementes Sesamo', 'Pimenta', 'Tomate'],
    kcal: 752,
  },
];

const Home = ({ navigation }) => {
  return (
    <Container>
      <PlateList>
        {plates.map((p) => (
          <Plate key={p.id} plate={p} />
        ))}
      </PlateList>
      <Reservation>
        <Button onPress={() => navigation.navigate('Login')} text='Reservar' fontSize='24px' />
      </Reservation>
    </Container>
  );
};

export default Home;
