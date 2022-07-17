import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Function/Firebase";
import { useNavigation } from "@react-navigation/native";

const MenuButton = ({ img, txt, func, navigation }) => {
  //   const navigation = useNavigation();

  const High = () => {};

  return (
    <TouchableOpacity style={styles.optionBtn} onPress={func}>
      <Image
        style={{ height: 30, width: 30 }}
        source={{
          uri: img,
        }}
      />
      <Text style={styles.option}>{txt}</Text>
    </TouchableOpacity>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  optionBtn: {
    padding: 10,
    marginVertical: 15,

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
});
