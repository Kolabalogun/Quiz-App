import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Function/Firebase";
import { useNavigation } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const naviget = useNavigation();

  // check if user is signed in
  const [userState, userStateF] = useState("null");

  // const passParams = (params) => {
  //   navigation.navigate("Main", { user: params });
  // };

  return (
    <View style={styles.container}>
      {/* <Title text={"Quiz App"} /> */}

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../../assets/quiz.png")}
        />

        <View style={styles.caption}>
          <Text style={styles.captionTitile}>Quiz App</Text>
          <Text style={styles.captionTxt}>
            Find quizzes, lessons, questions for students, employees, and
            everyone else
          </Text>
        </View>
      </View>

      <View style={styles.btns}>
        <TouchableOpacity
          style={styles.buttonReg}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.buttonTet}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSign}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.buttonTet}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "rgb(253, 208, 73)",
  },
  imageContainer: {
    margin: 20,
    alignItems: "center",
    flex: 1,
    borderRadius: 30,
  },
  image: {
    height: 330,
    width: 330,
    borderRadius: 20,
  },
  caption: {
    marginTop: 90,
    alignItems: "center",
  },
  captionTitile: {
    fontSize: 40,
    fontWeight: "600",
  },
  captionTxt: {
    marginTop: 20,
    fontSize: 16,

    textAlign: "center",
    lineHeight: 23,
  },
  btns: {
    flexDirection: "row",
    backgroundColor: "rgb(253, 219, 73)",

    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },

  buttonReg: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    flex: 1,
  },
  buttonSign: {
    // backgroundColor: "white",
    padding: 16,
    borderTopEndRadius: 16,
    borderBottomEndRadius: 16,
    alignItems: "center",
    flex: 1,
  },
  buttonTet: {
    fontSize: 20,
    fontWeight: "300",
    color: "black",
    textTransform: "capitalize",
  },
});
