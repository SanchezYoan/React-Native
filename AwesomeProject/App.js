import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";

export default function App() {
  const obj = [
    { id: "1", name: "Stan", age: 45 },
    { id: "2", name: "Francine", age: 45 },
    { id: "3", name: "hayley", age: 18 },
    { id: "4", name: "Steve", age: 15 },
    { id: "5", name: "Roger", age: 1020 },
    { id: "6", name: "Klaus", age: 30 },
    { id: "7", name: "Homer", age: 35 },
    { id: "8", name: "Bart", age: 11 },
  ];

  const [family, setFamily] = useState(obj);

  const renderItem = ({ item }) => (
    <View style={styles.viewList}>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Nom: </Text>
        {item.name}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Age: </Text>
        {item.age}
      </Text>
    </View>
  );
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={family}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  viewList: {
    marginTop: 30,
    backgroundColor: "purple",
    padding: 19,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  textBold: {
    fontWeight: "bold",
  },
});
