import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, KeyboardAvoidingView } from 'react-native';

import { Container, LogoContainer, Main, InputContainer, PreTitle, Title } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import IPCsource from '../../assets/ipclogo_white.png';

const Login = ({ navigation }) => {
  return (
    <Container>
      <StatusBar backgroundColor='#525ea6' style='light' />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={9}
      >
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <LogoContainer>
            <Image resizeMode='cover' source={IPCsource} />
          </LogoContainer>

          <Main>
            <View>
              <PreTitle>Bem-vindo a</PreTitle>
              <Title>Cantinas IPC</Title>
            </View>

            <InputContainer>
              <Input
                title='Email'
                style={{ marginBottom: 25 }}
                fontsize='15px'
                autoCorrect={false}
                autoCapitalize='none'
                autoCompleteType='email'
                keyboardType='email-address'
                textContentType='emailAddress'
              />
              <Input
                title='Password'
                style={{ marginBottom: 25 }}
                fontsize='15px'
                autoCorrect={false}
                autoCapitalize='none'
                autoCompleteType='password'
                textContentType='password'
                secureTextEntry={true}
              />
            </InputContainer>
            <View>
              <Button text='Entrar' fontSize='24px' />
            </View>
          </Main>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Login;
