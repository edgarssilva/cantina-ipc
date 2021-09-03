import React from "react";
import { TextInput, Text } from "react-native";
import { Container, InputText } from "./styles";

const Input = ({ text, fontsize }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <InputText
        placeholder={text}
        autoCorrect={false}
        onChangeText={() => {}}
        fontsize={fontsize}
      />
    </Container>
  );
};

export default Input;
