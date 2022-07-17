import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Category from "./Category";

const CategoryList = ({ navigation }) => {
  return (
    <View style={styles.quizCat}>
      <Text style={styles.quizCatTitle}>Quiz Categories</Text>
      <View style={styles.quizCatDiv}>
        <Category
          img={
            "https://cdni.iconscout.com/illustration/premium/thumb/greece-history-5526266-4620026.png"
          }
          txt="History Quiz"
          api={
            "https://opentdb.com/api.php?amount=10&category=23&type=multiple&encode=url3986"
          }
          navigation={navigation}
        />
        <Category
          img="https://cdni.iconscout.com/illustration/premium/thumb/science-lab-4027333-3328831.png"
          txt="Science Quiz"
          api={
            "https://opentdb.com/api.php?amount=10&category=17&type=multiple&encode=url3986"
          }
          navigation={navigation}
        />
        <Category
          img="https://cdni.iconscout.com/illustration/premium/thumb/sport-study-4024616-3328753.png"
          txt="Sports Quiz"
          api={
            "https://opentdb.com/api.php?amount=10&category=21&type=multiple&encode=url3986"
          }
          navigation={navigation}
        />
      </View>
      <View style={styles.quizCatDiv}>
        <Category
          img={
            "https://cdni.iconscout.com/illustration/premium/thumb/girl-blowing-flying-kiss-3327846-2796442.png"
          }
          txt="Manga Quiz"
          navigation={navigation}
          api={
            "https://opentdb.com/api.php?amount=10&category=31&type=multiple&encode=url3986"
          }
        />
        <Category
          img="https://cdni.iconscout.com/illustration/premium/thumb/mathematics-education-4704305-3932537.png"
          txt="Mathematics Quiz"
          api={
            "https://opentdb.com/api.php?amount=10&category=19&type=multiple&encode=url3986"
          }
          navigation={navigation}
        />
        <Category
          img="https://cdni.iconscout.com/illustration/premium/thumb/film-director-standing-beside-movie-clap-and-holding-megaphone-2932410-2458074.png"
          txt={"Movies Quiz"}
          api={
            "https://opentdb.com/api.php?amount=10&category=11&type=multiple&encode=url3986"
          }
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  quizCat: {
    paddingHorizontal: 16,
  },
  quizCatTitle: {
    paddingVertical: 16,
    fontSize: 28,
    fontWeight: "600",
  },
  quizCatDiv: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});
