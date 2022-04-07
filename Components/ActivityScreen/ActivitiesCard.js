import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import InsetShadow from "react-native-inset-shadow";

import React from "react";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";

const ActivitiesCard = ({ item, navigation }) => {
  const onSelect = () => {
    // navigation.navigate(`${item.screen}`);
    console.log("clicked");
  };

  return (
    <TouchableNativeFeedback onPress={() => onSelect()}>
      <View style={styles.card}>
        <View style={styles.content}>
          {item.icon === "body" ? (
            <Ionicons name="body" size={48} color="#5260dd" />
          ) : item.icon === "yoga" ? (
            <MaterialCommunityIcons name="yoga" size={48} color="#5260dd" />
          ) : item.icon === "shopping-pos-machine" ? (
            <Fontisto
              style={styles.shopIcon}
              name="shopping-pos-machine"
              size={50}
              color="#5260dd"
            />
          ) : (
            <FontAwesome5 name={item.icon} size={52} color="#5260dd" />
          )}
          <Text style={styles.titletxt}>{item.title}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ActivitiesCard;

const styles = StyleSheet.create({
  
  card: {
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 8,
    marginLeft: 8,
    marginRight: 8,
    width: "46%",
    height: 160,
    borderRadius: 8,
    backgroundColor: "#eff3ff",
    shadowColor: "#85878e",
    shadowOpacity: 0.26,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  titletxt: {
    marginTop: 20,
    fontSize: 18,
    color: "#5260dd",
    textAlign: "center",
    fontFamily: "OpenSans_400Regular",
    letterSpacing: 1,
  },
  shopIcon: { marginLeft: 16 },
});
