import React from "react";
import { View, SafeAreaView, ScrollView, Button } from "react-native";
import MyBarChart from "./MyBarChart";
import styles from "../styles/styles";

const Dashboard = ({route,dark,navigation}) => {
  const { user1, user2, user3, user4, user5 } = route.params;
  const info = [user1, user2, user3, user4, user5];
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
          <MyBarChart info={info} dark={dark} />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Button
            title="Edit the form"
            color={dark ? "#283f6b" : null}
            onPress={() => navigation.navigate("Fill in the Form")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
