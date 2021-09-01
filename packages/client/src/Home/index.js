<<<<<<< HEAD
import React from "react";
import { Image, Text } from "react-native";
import ipcLogo from "../../assets/104938.png";
import Button from "../components/Button";
import { Container, IpcLogo } from "./styles";
=======
import React from 'react';
import { Text, Button } from 'react-native';

import { Container } from './styles';
>>>>>>> b2f6cf521bd1a4b9d2859ea94f2ca279c1f2749a

const Home = ({ navigation }) => {
  return (
    <Container>
<<<<<<< HEAD
      <IpcLogo
        source={ipcLogo}
        style={{
          height: 200,
          width: 200,
          resizeMode: "contain",
        }}
      />
      <Button text="Reservar" />
=======
      <Text>This is the Home Screen!!!</Text>
      <Button
        title='Go to Login'
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
>>>>>>> b2f6cf521bd1a4b9d2859ea94f2ca279c1f2749a
    </Container>
  );
};

export default Home;
