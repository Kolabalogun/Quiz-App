// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import { AppProvider } from "./QuizApp/Function/Context";
import MyStack from "./QuizApp/Function/Navigation";
import Home from "./QuizApp/Screens/Home";
import Quiz from "./QuizApp/Screens/Quiz";

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <MyStack />
      </AppProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "rgb(255, 255, 255)",
  },
});
