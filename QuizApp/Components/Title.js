import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "600",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
});
