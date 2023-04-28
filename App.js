import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Homescreen";
import AboutScreen from "./Aboutscreen";
import basketball from "./basketball";
import file from "./file"


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="basket" component={basketball}/>
        <Stack.Screen name="file" component={file}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}