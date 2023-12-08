import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

export default function App() {
  const obj = {
    name: "Spiderman",
    age: 28,
  };

  const [infos, setInfo] = useState(obj);

  const handlePress = () => {
    setInfo({
      name: "Batman",
      age: 37,
    });
  };
  return (
    <View style={styles.wrapper}>
      <Text>{infos.name}</Text>
      <Text>{infos.age}</Text>
      <Button
        title="Cliquez ici"
        color="red"
        onPress={() => handlePress()}
        accessibilityLabel="Learn more about this purple button"
        disabled={false}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginTop: 50, flexDirection: "column", fontSize: 20 },
  viewOne: { backgroundColor: "green" },
  viewTwo: { backgroundColor: "red" },
  textOne: { fontFamily: "Cochin", fontWeight: "bold" },
  textTwo: { fontFamily: "Cochin", fontSize: 20, fontWeight: "bold" },
});
