import React from "react";
import ipcLogo from "../../assets/104938.png";
import Button from "../components/Button";
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
      <Button text="Reservar" />
    </Container>
  );
};

export default Home;
