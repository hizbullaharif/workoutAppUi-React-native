import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const Category = ({ item }) => {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.icon}>
          <FontAwesome5 name={item.icon} size={24} color="#5260dd" />
        </View>
        <View>
          <Text style={styles.titletxt}>{item.title}</Text>
          <Text style={styles.numb}>{item.quantity}</Text>
        </View>
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginLeft: 8,
    marginRight: 8,
    width: 137,
    height: 70,
    borderRadius: 8,
    backgroundColor: "#eff3ff",
    shadowColor: "#85878e",
    shadowOpacity: 0.26,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
    flexDirection: "row",
    // justifyContent:"space-between"
    padding: 10,
  },
  icon: {
    justifyContent: "flex-start",
    //   backgroundColor:'black'
    marginRight: 9,
    marginTop: 4,
  },
  titletxt: {
    fontSize: 18,
    color: "#5260dd",
    fontFamily: "OpenSans_400Regular",
    letterSpacing: 1,
  },
  numb: {
    fontSize: 25,
    // marginTop: -7,
    color: "#5260dd",
    fontFamily: "OpenSans_600SemiBold",
  },
});
