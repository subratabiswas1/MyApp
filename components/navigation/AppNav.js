import { StyleSheet} from "react-native";
import React, { useContext } from "react";
import StatusBarTop from "../statusbar/StatusBarTop";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

const AppNav = () => {
  const { userToken } = useContext(AuthContext);
  return (
    <>
      <StatusBarTop />
      <NavigationContainer>
        {userToken === null ? <AuthStack /> : <AppStack />}
      </NavigationContainer>
    </>
  );
};

export default AppNav;

const styles = StyleSheet.create({});
