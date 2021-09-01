import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Login from './pages/Login';
import MenuBar from './components/MenuBar';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: (props) => <MenuBar {...props} />,
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
};

export default Routes;
