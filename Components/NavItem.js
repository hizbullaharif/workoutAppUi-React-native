import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  useNavigationState,
} from "react-native";
import InsetShadow from "react-native-inset-shadow";
import Colors from "./Constants/Colors";

import React from "react";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

let isSelect = false

const NavItem = ({ item, navigation }) => {
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 1];

  isSelect = item.screen === prevRoute.name ? true : false;

  const onSelect = () => {
    navigation.navigate(`${item.screen}`);
  };

  const Content =()=>( <View style={styles.content}>
    {item.icon === "settings-outline" ? (
      <Ionicons name="settings-outline" size={24} color="#5260dd" />
    ) : item.icon === "account-circle-outline" ? (
      <MaterialCommunityIcons
        name="account-circle-outline"
        size={24}
        color="#5260dd"
      />
    ) : (
      <FontAwesome5 name={item.icon} size={24} color="#5260dd" />
    )}
    <Text style={styles.titletxt}>{item.title}</Text>
  </View>)
  const CardUnselected = ({ item }) => (
    <TouchableNativeFeedback onPress={() => onSelect()}>
      <View style={{...styles.card,elevation:2}}>
       <Content />
      </View>
    </TouchableNativeFeedback>
  );

  const CardSelected = ({ item }) => (
    <TouchableNativeFeedback onPress={() => onSelect()}>
      <View style={styles.card}>
        <InsetShadow
          elevation={8}
          shadowOpacity={0.9}
          shadowRadius={4}
          shadowColor={"black"}
          containerStyle={{
            borderColor: "black",
          }}
        >
           <Content />
        </InsetShadow>
      </View>
    </TouchableNativeFeedback>
  );

  return (
    <View>
      {item.screen === prevRoute.name ? (
        <CardSelected item={item} navigation={navigation} />
      ) : (
        <CardUnselected item={item} navigation={navigation} />
      )}
    </View>
  );
};

export default NavItem;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 8,
    marginLeft: 8,
    marginRight: 8,
    width: 72,
    height: 80,
    borderRadius: 8,
    backgroundColor: Colors.CardbackgroundColor,
    shadowColor: Colors.ShadowColor,
    shadowOpacity: 0.26,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: isSelect ? 2 : 0,
    // flexDirection: "row",
    // padding: 10,
  },

  titletxt: {
    marginTop: 6,
    fontSize: 18,
    color: Colors.primaryColor,
    textAlign: "center",
    fontFamily: "OpenSans_400Regular",
  },

  content: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 13,
  },
});
