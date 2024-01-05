import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Alert,
} from "react-native";
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

  const myObj = { age: 20, name: "toto" };
  const [family, setFamily] = useState(obj);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    Alert.alert("Info", "La liste est rafraîchie", [
      {
        text: "OK",
        onPress: () => console.warn("La liste est rafraîchie"),
        style: "cancel",
      },
    ]);
    setRefreshing(false);
    // setTimeout(() => {}, 2000);
  };
  return (
    <View style={styles.wrapper}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#ff1493"]}
          />
        }
      >
        {family.map((member) => {
          return (
            <View key={member.id} style={styles.list}>
              <Text style={styles.listText}>
                Nom: {member.name} | Age: {member.age}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    alignItems: "stretch",
    justifyContent: "flex-end",
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
  list: {
    backgroundColor: "deepskyblue",
    alignItems: "center",
    margin: 10,
  },
  listText: {
    padding: 10,
    fontSize: 40,
    color: "white",
  },
});
