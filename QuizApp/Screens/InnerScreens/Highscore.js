import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../Function/Context";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../Function/Firebase";
import TopBar from "../../Components/TopBar";

const Highscore = () => {
  const { user } = useGlobalContext();
  const userId = user?.uid;
  const [scores, scoresF] = useState([]);
  const [nuser, nuserF] = useState("");

  const getCurrentUID = async () => {
    const userr = auth.currentUser;
    if (userr !== null) {
      const uid = user.uid;
      nuserF(uid);
    }
  };

  //   console.log(nuser);

  useEffect(() => {
    // setloader(true);
    getCurrentUID();
    const unsub = onSnapshot(
      collection(db, "highscores"),

      (snapshot) => {
        let list = [];

        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        scoresF(list);
        // setloader(false);
      },
      (error) => {
        // console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const points = scores;

  points.sort(function (a, b) {
    return b.score - a.score;
  });

  const kkjj = points.map((scoreEach, index) => {
    if (userId && scoreEach.userId === nuser) {
      return (
        <TouchableOpacity key={index} style={styles.optionBtn}>
          <Text style={styles.option}>{scoreEach.quiz}</Text>
          <Text style={styles.option}>{scoreEach.score}</Text>
        </TouchableOpacity>
      );
    }
  });

  return (
    <ScrollView style={styles.container}>
      <TopBar title={"Highscores"} />

      <View style={styles.body}>
        <>
          {kkjj}

          {scores.length === 0 && (
            <View style={styles.noth}>
              <Image
                source={{
                  uri: "https://cdni.iconscout.com/illustration/premium/thumb/no-search-found-2511608-2133696.png",
                }}
                style={{ width: 300, height: 300 }}
              />
              <Text style={styles.nothTxt}>
                Heyyy, you shouldn't be here. Go play a game and come back!!!
              </Text>
            </View>
          )}
        </>
      </View>
    </ScrollView>
  );
};

export default Highscore;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    height: "100%",
    backgroundColor: "rgb(254, 244, 232)",
  },
  body: {
    paddingHorizontal: 20,

    marginVertical: 30,
    flex: 1,
  },
  optionBtn: {
    padding: 10,
    marginVertical: 15,
    justifyContent: "space-between",

    borderColor: "rgb(235, 148, 129)",
    borderWidth: 2,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  option: {
    fontSize: 20,
    fontWeight: "500",
    color: "black",
    paddingHorizontal: 10,
  },
  noth: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nothTxt: {
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "italic",
    marginVertical: 20,
  },
});
