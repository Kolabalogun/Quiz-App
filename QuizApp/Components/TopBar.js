import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const TopBar = ({ title, txt, display }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{ height: 30, width: 30, display: display }}
          source={{
            uri: "https://cdn.iconscout.com/icon/premium/png-64-thumb/arrow-back-5725666-4802659.png",
          }}
        />
      </TouchableOpacity>

      <Text style={{ fontSize: 23, color: "white", marginLeft: 30 }}>
        {" "}
        {txt} {title}
      </Text>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "rgb(38, 50, 56)",
    height: 90,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
});
