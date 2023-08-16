import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  const [loader, loaderF] = useState(false);

  const navigation = useNavigation();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigation.navigate("Main");
      setuser(user);
    } else {
      navigation.navigate("Home");
      setuser(null);
    }
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Main");
        setuser(user);
      } else {
        navigation.navigate("Home");
        setuser(null);
      }
    });
  }, []);

  //   logging out user
  const handleLogout = () => {
    storeData("false");
    signOut(auth).then(() => {
      setuser(null);
    });
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("user", value);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      loaderF(true);
      const value = await AsyncStorage.getItem("user");

      const parsedData = value ? JSON.parse(value) : {};

      console.log(parsedData);

      loaderF(false);

      if (parsedData !== "false") {
        setuser(parsedData);
        navigation.navigate("Main");
      } else {
        setuser(null);
        navigation.navigate("Home");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // check if there is internet connecttion
  const [online, onlineF] = useState(true);

  NetInfo.fetch().then((state) => {
    onlineF(state.isConnected);
  });

  const checkNetwork = () => {
    NetInfo.fetch().then((state) => {
      onlineF(state.isConnected);
    });
  };

  return (
    <AppContext.Provider
      value={{
        user,
        navigation,
        setuser,
        loader,
        loaderF,
        online,
        storeData,
        getData,
        handleLogout,
        checkNetwork,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
