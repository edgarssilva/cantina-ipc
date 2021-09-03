import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";
import Login from "./pages/Login";
import MenuBar from "./components/MenuBar";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <>
      {/* <MenuBar /> */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </>
  );
};

export default Routes;
