import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FlatList } from "react-native";
import Category from "./Category";
import CategoryDaily from "./CategoryDaily";
import Colors from "./Constants/Colors";

const Activity = () => {
  DATA = [
    {
      id: Math.random().toString(),
      title: "STEPS",
      icon: "shoe-prints",
      quantity: 1228,
    },
    {
      id: Math.random().toString(),
      title: "CALORIES",
      icon: "tshirt",
      quantity: 829,
    },
    {
      id: Math.random().toString(),
      title: "BPM",
      icon: "heart-broken",
      quantity: 883,
    },
    {
      id: Math.random().toString(),
      title: "STEPS",
      icon: "shoe-prints",
      quantity: 1228,
    },
    {
      id: Math.random().toString(),
      title: "CALORIES",
      icon: "tshirt",
      quantity: 829,
    },
    {
      id: Math.random().toString(),
      title: "BPM",
      icon: "heart-broken",
      quantity: 883,
    },
  ];
  DAILYDATA = [
    { id: Math.random().toString(), title: "MON", day: "08" },
    { id: Math.random().toString(), title: "SUN", day: "07" },
    { id: Math.random().toString(), title: "SAT", day: "06" },
    { id: Math.random().toString(), title: "FRI", day: "05" },
    { id: Math.random().toString(), title: "SAT", day: "06" },
    { id: Math.random().toString(), title: "FRI", day: "05" },
  ];

  const renderItem = ({ item }) => <Category item={item} />;

  const renderDailyCard = ({ item }) => <CategoryDaily item={item} />;

  return (
    <View style={styles.main}>
      {/* Todays Activity */}
      <View style={styles.head}>
        <Text style={styles.titleSize}>Today's Activity</Text>
        <View style={styles.detailsTxtArrow}>
          <Text style={styles.detailsTxt}>Details</Text>
          <AntDesign
            name="arrowright"
            style={styles.arrow}
            size={24}
            color="black"
          />
        </View>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={DATA}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      {/* Details Activity */}
      <View style={styles.dailyDetails}>
        <Text style={styles.titleSize}>Daily Activity</Text>
        <View style={styles.detailsTxtArrow}>
          <Text style={styles.detailsTxt}>Details</Text>
          <AntDesign
            name="arrowright"
            style={styles.arrow}
            size={24}
            color="black"
          />
        </View>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={DAILYDATA}
        renderItem={renderDailyCard}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  cards: {
    flexDirection: "row",
  },
  main: {
    marginTop: 30,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 24,
  },
  detailsTxtArrow: {
    flexDirection: "row",
  },

  titleSize: {
    fontSize: 18,
    marginRight: 10,
    // fontWeight: "bold",
    fontFamily: "OpenSans_600SemiBold",
  },
  detailsTxt: {
    fontSize: 18,
    marginRight: 10,
    color: Colors.primaryColor,
    fontFamily: "OpenSans_400Regular",
  },

  //   Details Head
  dailyDetails: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
