import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import HomeScreen from "./pages/Home";
import SignInScreen from "./pages/SingIn";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{
          headerTitle: () =>
            <Image
              source={require("./img/logoimg.png")}
              style={{ width: 100, height: 90, marginRight: 70 }}
            />,
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
