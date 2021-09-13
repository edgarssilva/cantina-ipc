import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Login from './pages/Login';
import { useAuth } from './contexts/auth';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const { signed } = useAuth();

  return (
    <>
      {signed ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Routes;
