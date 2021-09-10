import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </>
  );
};

export default Routes;
