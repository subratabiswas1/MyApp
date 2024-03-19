import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const HeaderRight = () => {
  const auth = FIREBASE_AUTH;
  const { dark, setDark, logout, isLoading, setIsLoading } =
    useContext(AuthContext);
  const handleLogout = () => {
    auth
      .signOut()
      .then(async () => {
        setIsLoading(true);
        setTimeout(() => logout(), 500);
      })
      .catch((error) => alert(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <Button
        color={dark ? "#bbb" : "black"}
        title={dark ? "Light" : "Dark"}
        onPress={() => (dark ? setDark(false) : setDark(true))}
      />
      <Text>&nbsp;&nbsp;</Text>
      {isLoading ? (
        <View style={{ alignItems: "center" }}>
          <ActivityIndicator size={"large"} />
        </View>
      ) : (
        <Button
          color={dark ? "brown" : "red"}
          title="LogOut"
          onPress={() => handleLogout()}
        />
      )}
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({});
