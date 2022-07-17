import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  const [loader, loaderF] = useState(false);

  const navigation = useNavigation();

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
  return (
    <AppContext.Provider value={{ user, navigation, setuser, loader, loaderF }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
