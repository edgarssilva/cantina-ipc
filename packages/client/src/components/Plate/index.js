import React from 'react';
import Badge from '../Badge';
import { Container, Header, Title, Category, Description } from './styles';

/* Plate Format
    {
        id: integer
        title: string,
        type: string?
        procuts: [string],
        allergenic: [string],
        kcal: integer
    }   
*/

const getTypeColor = (type) => {
  switch (type) {
    case 'Carne':
      return '#cc3f3f';
    case 'Peixe':
      return '#3F6FCC';
    case 'Sopa':
      return '#CC833F';
  }
};

const Plate = ({ plate }) => {
  const { title, type, products, allergenic, kcal } = plate;
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        {type && <Badge text={type} color={getTypeColor(type)} />}
      </Header>

      <Description>
        <Category>Produtos: </Category>
        {products.join(', ')}.
      </Description>

      <Description>
        <Category>Pode conter Alergénicos: </Category>
        {allergenic.join(', ')}.
      </Description>

      <Description>
        <Category>Valor Calórico: </Category>
        {kcal} kcal.
      </Description>
    </Container>
  );
};

export default Plate;
