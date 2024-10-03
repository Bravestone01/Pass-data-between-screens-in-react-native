import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LoginScreen = (props) => {
  const { email, password } = props.route.params;

  return (
    <View style={styles.main}>
      <Text style={styles.text}>LoginScreen</Text>
      <Text style={styles.text}>name:{email}</Text>
      <Text style={styles.text}>age:{password}</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    backgroundColor: "red",
    fontSize: 20,
    padding: 20,
    marginTop: 10,
  },
});
