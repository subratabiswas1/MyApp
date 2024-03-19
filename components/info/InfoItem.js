import { StyleSheet, Text, View,Button } from "react-native";
import React, { useContext } from "react";
import styles from "../../styles/styles";
import { AuthContext } from "../context/AuthContext";
import { setInformation } from "../AsyncStorage/AsyncStorage";

const InfoItem = ({item}) => {
  const { dark, setInfo, info } = useContext(AuthContext);
  return (
    <View style={styles.item} key={item.id}>
      <Text style={[styles.itemText, { color: dark ? "white" : "black" }]}>
        {item.username}
      </Text>
      <Text style={[styles.itemText, { color: dark ? "white" : "black" }]}>
        {item.expense}
      </Text>
      <View style={{ flex: 1 }}>
        <Button
          title="delete"
          color={dark ? "#5c202d" : "red"}
          onPress={() => {
            setInfo(info.filter((a) => a.id !== item.id));
            setInformation(info);
          }}
        />
      </View>
    </View>
  );
};

export default InfoItem;
