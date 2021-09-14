import React from 'react';
import { TextInput, Text } from 'react-native';
import { Container, InputText } from './styles';

const Input = (props) => {
  return (
    <Container>
      <Text>{props.title}</Text>
      <InputText {...props} fontsize={props.fontsize} />
    </Container>
  );
};

export default Input;
