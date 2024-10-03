import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
const Stack = createStackNavigator();
const AppNavigators = () => {
  const btnAction = () => {
    console.warn("button preesed");
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: () => <Button title="left" onPress={btnAction} />,
          headerRight: () => <Button title="right" onPress={btnAction} />,
        }}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigators;

const styles = StyleSheet.create({});
