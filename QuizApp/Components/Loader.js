import { Image, StyleSheet, Text, View } from "react-native";

const Loader = ({ txt }) => {
  return (
    <View style={styles.loadercontainer}>
      <Text style={styles.lod}>{txt}.</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loadercontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(254, 244, 232)",
  },
  lod: {
    fontSize: 14,
  },
});
