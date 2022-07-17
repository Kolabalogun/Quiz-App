import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import TopBar from "../../Components/TopBar";

const Credits = () => {
  return (
    <ScrollView style={styles.container}>
      <TopBar title={"Credits"} />

      <View style={styles.body}>
        <View style={styles.noth}>
          <Image
            resizeMode="contain"
            source={require("../../../assets/quiz.png")}
            style={{ width: 300, height: 300 }}
          />
          <Text style={styles.nothTxt}>This app is developed by Ibrahim.</Text>
          <TouchableOpacity
            style={styles.optionBtn}
            onPress={() => {
              Linking.openURL("https://ibrahimkolabalogun.web.app/");
            }}
          >
            <Text style={styles.option}>See Portfolio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Credits;

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
