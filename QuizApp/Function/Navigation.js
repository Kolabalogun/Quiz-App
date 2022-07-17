import { createStackNavigator } from "@react-navigation/stack";
import { Platform, StatusBar, StyleSheet } from "react-native";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import Quiz from "../Screens/Quiz";
import Result from "../Screens/Result";
import Register from "../Screens/Register";
import Main from "../Screens/Main";
import Highscore from "../Screens/InnerScreens/Highscore";
import Credits from "../Screens/InnerScreens/Credits";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator style={styles.container}>
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
    </Stack.Navigator>
  );
}

export default MyStack;

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
