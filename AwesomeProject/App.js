import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function App() {
  const Person = ({ name, age }) => {
    return (
      <View>
        {age ? (
          <Text style={styles.textTwo}>
            Je suis {name} | age: {age}
          </Text>
        ) : (
          <Text style={styles.textTwo}>Je suis {name}</Text>
        )}
      </View>
    );
  };
  return (
    <View style={styles.wrapper}>
      <Person name="Roger" />
      <Person name="Marie" />
      <Person name="Steve" age="25" />
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
