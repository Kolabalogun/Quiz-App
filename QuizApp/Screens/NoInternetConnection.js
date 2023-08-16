import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useGlobalContext } from "../Function/Context";

const NoInternetConnection = () => {
  const { checkNetwork } = useGlobalContext();

  return (
    <SafeAreaView
      className="flex-1 flex-col
    
    p-5 "
    >
      <View className="my-9 items-center">
        <Image
          source={require("../assets/nointernet.png")}
          className="h-64 w-64"
        />
      </View>
      <View className="flex-1 items-center my-2">
        <Text className="font-semibold my-2 text-lg">
          No network connection...
        </Text>
        <Text className="text-base text-center text-[#686868]">
          You seem to be offline. Make sure you’re connected to Wi-Fi or your
          mobile network and try again.
        </Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={checkNetwork}
          className="bg-[#fddb49] p-4 items-center rounded-md"
        >
          <Text className="text-white font-medium text-base">RETRY</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NoInternetConnection;
