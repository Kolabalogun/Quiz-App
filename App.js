// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { AppProvider } from "./QuizApp/Function/Context";
import MyStack from "./QuizApp/Function/Navigation";

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
