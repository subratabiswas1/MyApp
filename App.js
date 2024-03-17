import { StatusBar, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import React, { useState } from "react";

const App = () => {
  const Stack = createNativeStackNavigator();
  const [dark, setDark] = useState(false);
  return (
    <>
      <StatusBar
        barStyle={dark ? "light-content" : "dark-content"}
        backgroundColor={dark ? "black" : "white"}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: dark ? "black" : "white",
            },
            headerTitleStyle: {
              color: dark ? "white" : "black",
            },
            headerRight: () => (
              <Button
                color={dark ? "#bbb" : "black"}
                title={dark ? "Light" : "Dark"}
                onPress={() => (dark ? setDark(false) : setDark(true))}
              />
            ),
          }}
        >
          <Stack.Screen name="Fill in the Form">
            {(props) => <Form {...props} dark={dark} />}
          </Stack.Screen>
          <Stack.Screen name="Dashboard">
            {(props) => <Dashboard {...props} dark={dark} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
