import React, { useContext } from "react";
import { View, SafeAreaView, ScrollView, Button } from "react-native";
import MyBarChart from "../BarChart/MyBarChart";
import styles from "../../styles/styles";
import { AuthContext } from "../context/AuthContext";

const Dashboard = ({ route, navigation }) => {
  const { dark } = useContext(AuthContext);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
        backgroundColor: dark ? "#292929" : null,
      }}
    >
      <ScrollView>
        <View style={styles.chartContainer}>
          <MyBarChart info={route.params}/>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Button
            title="Go back"
            color={dark ? "#283f6b" : null}
            onPress={() => navigation.navigate("Data Entry")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
