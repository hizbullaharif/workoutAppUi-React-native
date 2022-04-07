import { StyleSheet, Text, View } from "react-native";
import Colors from "./Constants/Colors";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.nameTxt}>Hello Ankur!</Text>
        <View style={styles.finworkoutTxt}>
          <Text style={styles.findTxt}>Find A</Text>
          <Text style={styles.workoutTxt}>Workout</Text>
        </View>
      </View>
      <View style={styles.icon}>
        <AntDesign name="search1" size={24} color="black" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  nameTxt: {
    color: Colors.primaryColor,
    fontSize: 18,
    fontFamily: "OpenSans_400Regular",
  },
  finworkoutTxt: {
    flexDirection: "row",
  },
  findTxt: {
    fontSize: 32,
    marginRight: 5,
    fontFamily: "OpenSans_600SemiBold",
  },
  workoutTxt: {
    fontSize: 32,
    color: Colors.primaryColor,
    fontFamily: "OpenSans_600SemiBold",
  },
  icon: {
    justifyContent: "center",
    alignContent: "center",
  },
});
