import { StatusBar, StyleSheet} from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const StatusBarTop = () => {
  const { dark } = useContext(AuthContext);

  return (
    <StatusBar
      barStyle={dark ? "light-content" : "dark-content"}
      backgroundColor={dark ? "black" : "white"}
    />
  );
};

export default StatusBarTop;

const styles = StyleSheet.create({});
