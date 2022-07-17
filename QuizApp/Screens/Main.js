import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu from "./Menu";
import Others from "./Others";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Function/Firebase";

const Tab = createBottomTabNavigator();

import { LogBox } from "react-native";
import { useGlobalContext } from "../Function/Context";
import Loader from "../Components/Loader";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const Main = ({ navigation }) => {
  const { loader, loaderF } = useGlobalContext();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigation.navigate("Home");
      }
    });
  }, []);

  return (
    <>
      {loader ? (
        <Loader txt={"Loading..."} />
      ) : (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = "home";
                (size = focused ? 28 : 20),
                  (color = focused ? "rgb(283, 208, 73)" : "#555");
              } else if (route.name === "Menu") {
                iconName = "notes";

                (size = focused ? 28 : 24),
                  (color = focused ? "rgb(283, 208, 73)" : "#555");
              }
              return (
                <MaterialIcons name={iconName} size={size} color={color} />
              );
            },
            tabBarStyle: { height: 50 },
            tabBarActiveTintColor: "black",
            tabBarActiveBackgroundColor: "rgb(254, 244, 232)",
            tabBarLabelStyle: { fontSize: 14 },
          })}
        >
          <Tab.Screen
            options={{ headerShown: false }}
            name="Home"
            // component={Menu}
            children={() => <Menu navigation={navigation} />}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Menu"
            // component={Others}
            children={() => <Others navigation={navigation} />}
          />
        </Tab.Navigator>
      )}
    </>
  );
};

export default Main;

const styles = StyleSheet.create({});
