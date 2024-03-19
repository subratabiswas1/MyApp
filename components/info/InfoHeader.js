import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import styles from "../../styles/styles";
import { AuthContext } from "../context/AuthContext";
import { removeInformation } from "../AsyncStorage/AsyncStorage";

const InfoHeader = () => {
  const { dark, setInfo } = useContext(AuthContext);
  return (
    <View style={styles.headingText}>
      <Text
        style={[
          styles.itemText,
          {
            fontWeight: 600,
            textDecorationLine: "underline",
            color: dark ? "white" : "black",
          },
        ]}
      >
        Subject
      </Text>
      <Text
        style={[
          styles.itemText,
          {
            fontWeight: 600,
            textDecorationLine: "underline",
            color: dark ? "white" : "black",
          },
        ]}
      >
        Marks
      </Text>
      <View style={{ flex: 1 }}>
        <Button
          onPress={() => {
            setInfo([]);
            removeInformation();
          }}
          color={dark ? "darkblue" : "black"}
          title="Delete all"
        />
      </View>
    </View>
  );
};

export default InfoHeader;
