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

import TopBar from "../Components/TopBar";
import { db } from "../Function/Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useGlobalContext } from "../Function/Context";

const Result = ({ navigation, route }) => {
  const { score, txt } = route.params;

  const { user } = useGlobalContext();

  const [scoreState, scoreStateF] = useState(score);
  const [Quiz, QuizF] = useState(txt);

  useEffect(() => {
    saveScore();
  }, []);

  const saveScore = async () => {
    if (scoreState) {
      // if we adding new score

      try {
        await addDoc(collection(db, "highscores"), {
          score: scoreState,
          timestamp: serverTimestamp(),
          author: user.displayName,
          userId: user.uid,
          quiz: Quiz,
        });
        // console.warn("Score successfully added");
      } catch (err) {
        // console.log(err);
      }
    }
  };

  const banner =
    score > 10 ? require("../../assets/s.png") : require("../../assets/m.png");

  return (
    <View style={styles.container}>
      <>
        <TopBar title={"Quiz Result"} display="none" />
      </>

      <View style={styles.imageContainer}>
        <Image style={styles.image} resizeMode="contain" source={banner} />
      </View>

      <Text style={styles.congrat}>Congratulations!</Text>
      <Text style={styles.lilCaption}>
        You've answered all the questions. Now you know more!!
      </Text>

      <Text style={styles.score}>YOUR SCORE</Text>
      <Text style={styles.scoreValue}>{score}/100</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Main");
        }}
      >
        <Text style={styles.buttonTet}>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    height: "100%",
    backgroundColor: "rgb(254, 244, 232)",
  },

  imageContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    height: 300,
    width: 300,
  },

  lilCaption: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
    lineHeight: 24,
    paddingHorizontal: 20,
  },

  congrat: { fontWeight: "600", fontSize: 40, textAlign: "center" },
  button: {
    backgroundColor: "rgb(38, 50, 56)",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 20,
  },
  buttonTet: {
    fontSize: 25,
    fontWeight: "600",
    color: "white",
  },
  scoreValue: {
    fontSize: 38,
    fontWeight: "500",
    textAlign: "center",
    marginVertical: 10,

    letterSpacing: 2,
  },
  score: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
    lineHeight: 24,
    letterSpacing: 2,
  },
});
