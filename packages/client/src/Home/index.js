import React from "react";
import { Image, Text, Button } from "react-native";
import ipcLogo from "../../assets/104938.png";
import { Container, IpcLogo } from "./styles";

const Home = ({ navigation }) => {
  return (
    <Container>
      <IpcLogo
        source={ipcLogo}
        style={{
          height: 200,
          width: 200,
          resizeMode: "contain",
        }}
      />
      <Button
        title="Reservar"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </Container>
  );
};

export default Home;
