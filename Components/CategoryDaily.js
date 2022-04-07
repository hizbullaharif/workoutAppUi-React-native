import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "./Constants/Colors";

const CategoryDaily = ({ item }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.titletxt}>{item.title}</Text>
        <Text style={styles.day}>{item.day}</Text>
      </View>
    </View>
  );
};

export default CategoryDaily;

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginLeft: 8,
    marginRight: 8,
    width: 70,
    height: 90,
    borderRadius: 8,
    backgroundColor: Colors.CardbackgroundColor,
    shadowColor: "#85878e",
    shadowOpacity: 0.26,
    shadowRadius: 10,
    shadowOffset: { width: 100, height: 100 },
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    elevation: 2,
  },

  titletxt: {
    fontSize: 20,
    color: Colors.primaryColor,
    marginTop: 3,
    fontFamily: "OpenSans_400Regular",
    letterSpacing: 3,
  },
  day: {
    fontSize: 26,
    // marginTop: -7,
    color: Colors.primaryColor,
    textAlign: "center",
    fontFamily: "OpenSans_600SemiBold",
  },
});
