import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.viewOne}>
        <Text style={styles.textOne}>Text one</Text>
        <Text style={styles.textOne}>Text one</Text>
        <Text style={styles.textOne}>Text one</Text>
      </View>
      <View style={styles.viewTwo}>
        <Text style={styles.textTwo}>Text Two</Text>
        <Text>Text Two</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginTop: 50, flexDirection: "column" },
  viewOne: { backgroundColor: "green" },
  textOne: { fontFamily: "Cochin" },
  viewTwo: { backgroundColor: "red" },
  textTwo: { fontFamily: "Cochin", fontSize: 20, fontWeight: "bold" },
});
