import React from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";

import { Container, IPCLogo, Container2, LogoContainer } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import IPCsource from "../../assets/whiteLogoIpc1.png";
import IPClogo from "../../assets/whiteLogoIpc2.png";

const Login = ({ navigation }) => {
  return (
    <Container>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        {/*Primeira Div para a parte superior onde vai estar o Logo e em Branco*/}
        <LogoContainer>
          <IPCLogo source={IPCsource} />
          <IPCLogo source={IPClogo} style={{ marginLeft: 15 }} />
        </LogoContainer>
        <Container2>
          {/*Segunda View onde vao os inputs e o botao*/}
          <View style={{ alignItems: "baseline" }}>
            <Text style={{ fontSize: 24, fontFamily: "Inter_600SemiBold" }}>
              {"Bem-vindo a"}
            </Text>
            <Text style={{ fontSize: 42, fontFamily: "Inter_600SemiBold" }}>
              {"Cantinas IPC"}
            </Text>
          </View>

          <View
            style={{ flex: 1, width: "100%", justifyContent: "space-evenly" }}
          >
            <Input text="Email" style={{ marginBottom: 10 }} fontsize="15px" />
            <Input
              text="Password"
              style={{ marginBottom: 10 }}
              fontsize="15px"
            />
          </View>
          <View>
            <Button
              onPress={() => navigation.navigate("Test")}
              text="Entrar"
              fontSize="24px"
            />
          </View>
        </Container2>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Login;
