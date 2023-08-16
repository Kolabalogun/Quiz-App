import { StyleSheet } from "react-native";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import Quiz from "../Screens/Quiz";
import Result from "../Screens/Result";
import Register from "../Screens/Register";
import Main from "../Screens/Main";
import Highscore from "../Screens/InnerScreens/Highscore";
import Credits from "../Screens/InnerScreens/Credits";
import { useGlobalContext } from "./Context";
import NoInternetConnection from "../Screens/NoInternetConnection";
import { useEffect } from "react";
import Loader from "../Components/Loader";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Navigations = () => {
  const { getData, loaderF, loader, online } = useGlobalContext();

  // useEffect(() => {
  //   loaderF(true);
  //   getData();
  //   loaderF(false);
  // }, []);

  return (
    <Stack.Navigator style={styles.container}>
      {!online ? (
        <Stack.Screen
          name="NoInternetConnection"
          component={NoInternetConnection}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Result"
            component={Result}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Highscore"
            component={Highscore}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Credits"
            component={Credits}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Navigations;

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingTop: 40,
    paddingHorizontal: 20,

    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
