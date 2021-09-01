import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter';

import { Text } from 'react-native';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_400Regular,
  });

  if (!fontsLoaded) return <Text>Loading...</Text>;

  return (
    <NavigationContainer>
      <Routes />
      <StatusBar backgroundColor='white' />
    </NavigationContainer>
  );
}
