import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const HeaderActivity = ({ navigation }) => {
  const onSelect = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <View style={styles.icon}>
        <TouchableOpacity onPress={onSelect}>
          <Ionicons
            style={styles.iconArrow}
            name="arrow-back-sharp"
            size={32}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.startActivityTxt}>
        <Text style={styles.startTxt}>Start</Text>
        <Text style={styles.activityTxt}>Activity</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    width: "75%",
  },
  nameTxt: {
    color: "#525fdf",
    fontSize: 18,
    fontFamily: "OpenSans_400Regular",
  },
  startActivityTxt: {
    flexDirection: "row",
  },
  startTxt: {
    fontSize: 32,
    marginRight: 8,
    fontFamily: "OpenSans_600SemiBold",
  },

  activityTxt: {
    fontSize: 32,
    color: "#525fdf",
    fontFamily: "OpenSans_600SemiBold",
  },

  icon: {
    justifyContent: "center",
    alignContent: "center",
  },

  iconArrow: {
    marginTop: 4,
  },
});

export default HeaderActivity;
