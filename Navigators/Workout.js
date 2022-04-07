import { View, Text } from "react-native";
import React from "react";

import HomeScreen from "../screens/Home";
import ActivityScreen from "../screens/ActivityScreen";
import Setting from "../Components/SettingScreen/Setting";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const WorkoutNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          options={{ title: "Home", headerShown: false }}
          component={HomeScreen}
        />
        
        <Stack.Screen
          name="activityScreen"
          options={{ title: "Activity", headerShown: false }}
          component={ActivityScreen}
        />

        <Stack.Screen
          name="setting"
          options={{ title: "Setting", headerShown: true }}
          component={Setting}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WorkoutNavigator;
