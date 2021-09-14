import React from 'react';
import { Container, ButtonContainer, ButtonText } from './styles';

const Button = ({ text, onPress, fontSize, color }) => {
  return (
    <Container>
      <ButtonContainer onPress={onPress}>
        <ButtonText fontSize={fontSize} color={color}>
          {text}
        </ButtonText>
      </ButtonContainer>
    </Container>
  );
};

Button.defaultProps = {
  text: 'Reservar',
};

export default Button;
