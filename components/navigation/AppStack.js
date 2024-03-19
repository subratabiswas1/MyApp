import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import Form from "../screens/Form";
import Dashboard from "../screens/Dashboard";
import { AuthContext } from "../context/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderRight from "../darkmode/HeaderRight";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const { dark, userToken } = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: dark ? "black" : "white",
        },
        headerTitleStyle: {
          fontSize:17,
          color: dark ? "white" : "black",
        },
        headerRight: () => <HeaderRight />,
      }}
    >
      <Stack.Screen
        name="Data Entry"
        component={Form}
        options={{
          headerTitle: "Hi, " + userToken._tokenResponse.email,
        }}
      />
      <Stack.Screen name="Data Visualisation" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
