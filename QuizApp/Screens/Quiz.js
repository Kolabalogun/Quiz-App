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
import TopBar from "../Components/TopBar";
import Loader from "../Components/Loader";

const Quiz = ({ navigation, route }) => {
  const { api, txt } = route.params;

  const [loader, loaderF] = useState(true);
  const [questions, questionsF] = useState();
  const [questionNo, questionNoF] = useState(0);
  const [options, optionsF] = useState([]);
  const [score, scoreF] = useState(0);

  const genenarateOptionsandShuffle = (_question) => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);
    return options;
  };

  const getQuiz = async () => {
    const url = api;
    const res = await fetch(url);
    const data = await res.json();
    questionsF(data.results);

    optionsF(genenarateOptionsandShuffle(data.results[0]));
    loaderF(false);
    setSeconds(10);
  };

  useEffect(() => {
    // loaderF(true);
    getQuiz();
  }, []);

  //   shuffle array of options
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleSelectedOption = (_option) => {
    if (_option === questions[questionNo].correct_answer) {
      scoreF(score + 10);
      //   console.warn(score);
    }

    if (questionNo !== 9) {
      questionNoF(questionNo + 1);
      optionsF(genenarateOptionsandShuffle(questions[questionNo + 1]));
    }
    if (questionNo === 9) {
      handleShowResult();
    }
    setSeconds(10);
  };
  const handleNextQuestion = () => {
    if (questionNo !== 9) {
      questionNoF(questionNo + 1);
      optionsF(genenarateOptionsandShuffle(questions[questionNo + 1]));
    } else {
      handleShowResult();
    }
    setSeconds(10);
  };

  const handleShowResult = () => {
    navigation.navigate("Result", { score: score, txt: txt });
  };

  // countdown //

  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        handleNextQuestion();
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <>
      {loader ? (
        <Loader txt={"Loading Quiz..."} />
      ) : (
        <ScrollView style={styles.container}>
          {questions && (
            <>
              <>
                <TopBar txt={txt} display="flex" />
              </>

              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,

                  alignSelf: "center",
                  zIndex: 1,
                  marginTop: 30,
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    fontWeight: "500",
                  }}
                >
                  {questionNo}/10
                </Text>
              </View>

              <View style={styles.top}>
                <Text style={styles.question}>
                  {decodeURIComponent(questions[questionNo].question)}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,

                  alignSelf: "center",
                  zIndex: 1,
                  marginTop: -50,
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    fontWeight: "500",
                  }}
                >
                  Time: {seconds}
                </Text>
              </View>
              <View style={styles.options}>
                <TouchableOpacity
                  style={styles.optionBtn}
                  onPress={() => handleSelectedOption(options[0])}
                >
                  <Text style={styles.option}>
                    {decodeURIComponent(options[0])}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionBtn}
                  onPress={() => handleSelectedOption(options[1])}
                >
                  <Text style={styles.option}>
                    {decodeURIComponent(options[1])}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionBtn}
                  onPress={() => handleSelectedOption(options[2])}
                >
                  <Text style={styles.option}>
                    {decodeURIComponent(options[2])}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionBtn}
                  onPress={() => handleSelectedOption(options[3])}
                >
                  <Text style={styles.option}>
                    {decodeURIComponent(options[3])}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bottom}>
                <TouchableOpacity
                  onPress={handleNextQuestion}
                  style={styles.button}
                >
                  <Text style={styles.buttonTxt}>Skip</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </ScrollView>
      )}
    </>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    height: "100%",
    backgroundColor: "rgb(254, 244, 232)",
  },
  topBar: {
    backgroundColor: "rgb(38, 50, 56)",
    height: 70,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  top: {
    marginTop: -10,
    marginBottom: 30,
    backgroundColor: "rgb(253, 208, 73)",
    marginHorizontal: 20,
    padding: 20,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  question: {
    fontSize: 20,
    marginBottom: 10,
  },
  options: {
    marginVertical: 16,
    flex: 1,
    marginHorizontal: 16,
  },
  optionBtn: {
    padding: 12,
    marginVertical: 6,
    // backgroundColor: "rgb(235, 148, 129)",
    borderColor: "rgb(235, 148, 129)",
    borderWidth: 2,
    borderRadius: 12,
  },
  option: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    // justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "rgb(38, 50, 56)",
    padding: 12,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 10,
    // width: "100%",
    marginHorizontal: 16,
  },
  buttonTxt: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    textTransform: "uppercase",
  },
});
