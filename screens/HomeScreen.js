import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const HomeScreen = ({ navigation, props }) => {
  //const name= "Syed Mujtaba";
  // const age = 22;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.main}>
      <Text style={styles.text}>HomeScreen</Text>
      <TextInput
        placeholder="enter email"
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="enter password"
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        onPress={() => navigation?.navigate("LoginScreen", { email, password })}
      >
        <Text style={styles.btn}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
  },
  btn: {
    backgroundColor: "blue",
    color: "white",
    padding: 15,
    margin: 10,
    borderRadius: 20,
    fontSize: 20,
  },
  input: {
    fontSize: 20,

    color: "black",
    marginTop: 10,
    borderColor: "black",
    borderWidth: 2,
    padding: 6,
  },
});
