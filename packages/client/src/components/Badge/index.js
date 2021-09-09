import React from 'react';

import { Container, Text } from './styles';

const Badge = ({ text, color }) => {
  return (
    <Container color={color}>
      <Text>{text}</Text>
    </Container>
  );
};

export default Badge;
