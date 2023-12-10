import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useState } from "react";

export default function App() {
  const obj = {
    name: "Spiderman",
    age: 28,
  };

  const [name, setName] = useState();
  const [age, setAge] = useState();

  return (
    <View style={styles.wrapper}>
      <Text>
        Nom: {name} | Age: {age}
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Indiquez votre nom"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Indiquez votre âge"
        onChangeText={(val) => setAge(val)}
      />
      <Button title="Submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
    backgroundColor: "red",
    alignItems: "center",
    height: 200,
  },
  textInput: {
    height: 40,
    borderColor: "grey",
    backgroundColor: "white",
    borderWidth: 1,
    padding: 10,
    width: "90%",
  },
});
