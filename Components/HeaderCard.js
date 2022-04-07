import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
} from "react-native";
import Colors from "./Constants/Colors";
import React from "react";
import Svgimg from "../assets/images/yoga.svg";
import Ionicons from "@expo/vector-icons/Ionicons";

const HeaderCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <Svgimg style={styles.icon} width={100} height={260} />
      </View>
      <View style={styles.textIcons}>
        <View style={styles.txt}>
          <View style={styles.legandTxt}>
            <Text style={styles.legsTxt}>Legs</Text>
            <Text style={styles.andtxt}>and</Text>
          </View>

          <View style={styles.glutesworkoutTxt}>
            <Text style={styles.glutesTxt}>Glutes</Text>
            <Text style={styles.workoutTxt}>workout</Text>
          </View>
        </View>
        <View style={styles.advancedIconTxt}>
          <Ionicons
            style={styles.iconad}
            name="md-menu-sharp"
            size={18}
            color="white"
          />
          <Text style={styles.advancedTxt}>Advanced</Text>
        </View>
        <View style={styles.advancedIconTxt2}>
          <Ionicons
            style={styles.iconad}
            name="stopwatch-outline"
            size={18}
            color="black"
          />
          <Text style={styles.advancedTxt}>4.5Ms</Text>
        </View>
        <View style={styles.btnStart}>
          <Button title="Start Workout" color="#8b9ce9" />
        </View>
      </View>
    </View>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  card: {
    width: "99%",
    height: 200,
    marginTop: 35,
    backgroundColor: Colors.primaryColor,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 150,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#85878e",
    shadowOpacity: 0.26,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  icon: {
    flex: 1,
    marginTop: -16,
    marginRight: 15,
  },
  textIcons: {
    flex: 2,
    marginTop: 5,
  },

  legsTxt: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 32,

    color: "white",
    marginRight: 10,
  },
  andtxt: {
    // fontFamily: 'OpenSans_600SemiBold',
    fontSize: 32,
    color: "white",
  },
  glutesworkoutTxt: {
    flexDirection: "row",
  },
  glutesTxt: {
    fontSize: 32,
    color: "white",
    marginRight: 10,
    fontFamily: "OpenSans_600SemiBold",
  },
  workoutTxt: {
    fontSize: 32,
    color: "white",
    fontWeight: "200",
  },
  legandTxt: {
    flexDirection: "row",
  },

  advancedIconTxt: {
    flexDirection: "row",
    marginTop: 13,
  },

  advancedIconTxt2: {
    flexDirection: "row",
  },

  advancedTxt: {
    color: "white",
    fontFamily: "OpenSans_400Regular",
  },

  iconad: {
    marginRight: 7,
    color: "white",
  },
  btnStart: {
    marginTop: 20,
    borderRadius: 18,
    overflow: "hidden",
    width: 150,
    fontSize: 12,
    fontFamily: "OpenSans_400Regular",
  },
});
