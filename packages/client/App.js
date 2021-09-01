import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter';
import Home from './src/Home';
import Login from './src/Login';
import MenuBar from './src/components/MenuBar';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_400Regular,
  });

  if (!fontsLoaded) return <Text>Loading...</Text>;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: (props) => <MenuBar {...props} />,
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
      <StatusBar backgroundColor='white' />
    </NavigationContainer>
  );
}
