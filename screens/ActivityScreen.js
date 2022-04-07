import React from "react";
import { StyleSheet, View } from "react-native";
import HeaderActivity from "../Components/ActivityScreen/HeaderActivity";
import ActivitiesCard from "../Components/ActivityScreen/ActivitiesCard";
import { FlatList } from "react-native";
import BottomNav from "../Components/BottomNav";

const Activity = ({ navigation }) => {
  DATA = [
    {
      id: Math.random().toString(),
      icon: "shoe-prints",
      title: "Walking",
      screen: "Walking",
    },
    {
      id: Math.random().toString(),
      icon: "shopping-pos-machine",
      title: "Tradmill",
      screen: "tradmill",
    },
    {
      id: Math.random().toString(),
      icon: "running",
      title: "Running",
      screen: "running",
    },
    {
      id: Math.random().toString(),
      icon: "bicycle",
      title: "Cycling",
      screen: "cycling",
    },
    {
      id: Math.random().toString(),
      icon: "body",
      title: "Gym",
      screen: "gym",
    },
    {
      id: Math.random().toString(),
      icon: "yoga",
      title: "Yoga",
      screen: "yoga",
    },
  ];

  const renderItem = ({ item }) => <ActivitiesCard item={item} />;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <HeaderActivity navigation={navigation} />
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
          }}
        >
          {/* {DATA &&
            DATA.map((item, key) => (
              <ActivitiesCard item={item} key={key} navigation={navigation} />
            ))} */}
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <BottomNav navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#eff3ff",
    height: "100%",
  },
  container: {
    marginTop: 24,
    marginLeft: 10,
    marginRight: 10,
    height: "94%",
  },
});

export default Activity;
