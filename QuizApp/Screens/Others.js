import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";

import { auth } from "../Function/Firebase";
import { useNavigation } from "@react-navigation/native";
import { onAuthStateChanged, signOut } from "firebase/auth";
import TopBar from "../Components/TopBar";
import MenuButton from "../Components/MenuButton";
import { useGlobalContext } from "../Function/Context";

const Others = () => {
  const { navigation, handleLogout } = useGlobalContext();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (!user) {
  //       navigation.navigate("Home");
  //     }
  //   });
  // }, []);

  const Highnav = () => {
    navigation.navigate("Highscore");
  };
  const Creditnav = () => {
    navigation.navigate("Credits");
  };
  return (
    <View style={styles.container}>
      <>
        <TopBar title={"Quiz Menu"} display={"flex"} />
      </>

      <View style={styles.body}>
        <MenuButton
          img={
            "https://cdn.iconscout.com/icon/premium/png-128-thumb/high-score-4219135-3494234.png"
          }
          txt={"HighScore"}
          func={Highnav}
        />
        <MenuButton
          img={
            "https://cdn.iconscout.com/icon/free/png-128/team-1543514-1306008.png"
          }
          txt={"Credits"}
          func={Creditnav}
        />
        <MenuButton
          img={
            "https://cdn.iconscout.com/icon/free/png-128/logout-2032031-1713022.png"
          }
          txt={"Log Out"}
          func={handleLogout}
        />
      </View>
    </View>
  );
};

export default Others;

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
});
