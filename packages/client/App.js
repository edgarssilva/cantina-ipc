import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Login from './src/Login';
import MenuBar from './src/components/MenuBar';

const Stack = createNativeStackNavigator();

export default function App() {
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
