import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderCard from "../Components/HeaderCard";
import Activity from "../Components/HomeActivity";
import Header from "../Components/Header";
import BottomNav from "../Components/BottomNav";

const Home = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Header />
        <HeaderCard />
        <Activity />
        <View style={{ marginTop: 17 }}>
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
    marginTop: 20,
    marginLeft: 8,
    marginRight: 10,
  },
});

export default Home;
