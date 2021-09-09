import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Inter_600SemiBold, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { Text } from 'react-native';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) return <Text>Loading...</Text>;

  return (
    <NavigationContainer>
      <Routes />
      <StatusBar backgroundColor='white' translucent={false} />
    </NavigationContainer>
  );
}
