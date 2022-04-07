import { View } from "react-native";
import React from "react";

import NavItem from "../Components/NavItem";

const BottomNav = ({ navigation }) => {
  let DATA = [
    {
      id: Math.random().toString(),
      icon: "home",
      title: "Home",
      screen: "home",
    },
    {
      id: Math.random().toString(),
      icon: "heartbeat",
      title: "Activity",
      screen: "activityScreen",
    },
    {
      id: Math.random().toString(),
      icon: "settings-outline",
      title: "Setting",
      screen: "setting",
    },
    {
      id: Math.random().toString(),
      icon: "account-circle-outline",
      title: "Profile",
      screen: "profile",
    },
  ];

  return (
    <View style={{ flexDirection: "row", marginTop: 30 }}>
      {DATA &&
        DATA.map((item, key) => (
          <NavItem item={item} key={key} navigation={navigation} />
        ))}
    </View>
  );
};

export default BottomNav;
