import React, { useState, useContext, useEffect } from "react";
import { Text, View, TextInput, Button, FlatList, LogBox } from "react-native";
import styles from "../../styles/styles";
import uuid from "react-native-uuid";
import { AuthContext } from "../context/AuthContext";
import { setInformation } from "../AsyncStorage/AsyncStorage";
import InfoHeader from "../info/InfoHeader";
import InfoItem from "../info/InfoItem";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const Form = ({ navigation }) => {
  const { dark, info, setInfo } = useContext(AuthContext);
  const [text, setText] = useState("");
  const [numeric, setNumeric] = useState("");
  const [error, setError] = useState(false);

  const addEvent = () => {
    if (text !== "" && numeric !== "") {
      setInfo([...info, { id: uuid.v4(), username: text, expense: numeric }]);
      setInformation(info);
      setError(false);
    } else {
      setError(true);
    }
  };
  const clearEvent = () => {
    setNumeric("");
    setText("");
    setError(false);
  };
  const generateGraphEvent = () => {
    if (info.length) {
      navigation.navigate("Data Visualisation");
    } else {
      alert("Atleast add one input");
    }
  };
  const boxStyle = [
    styles.inputBox,
    styles.btn,
    {
      color: dark ? "white" : "black",
      borderColor: dark ? "white" : "black",
      shadowColor: dark ? "white" : "black",
    },
  ];

  return (
    <View style={[styles.main, { backgroundColor: dark ? "#292929" : null }]}>
      <TextInput
        placeholder="subject"
        placeholderTextColor={dark ? "#6b5f62" : "#bdb1b4"}
        style={boxStyle}
        value={text}
        onChangeText={(e) => setText(e)}
      />
      <TextInput
        placeholder="score in this subject"
        placeholderTextColor={dark ? "#6b5f62" : "#bdb1b4"}
        style={boxStyle}
        value={numeric}
        keyboardType="numeric"
        onChangeText={(e) => setNumeric(e)}
      />
      <Text style={{ color: "red", marginLeft: 20 }}>
        {error && !(text && numeric) ? "*All fields are required" : ""}
      </Text>
      <View style={styles.btn}>
        <Button
          title="Add"
          color={dark ? "#24401d" : "green"}
          onPress={() => addEvent()}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Clear "
          color={dark ? "#283f6b" : null}
          onPress={() => clearEvent()}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Generate Graph"
          color={dark ? "#6e5125" : "orange"}
          onPress={() => generateGraphEvent()}
        />
      </View>
      {info.length ? <InfoHeader /> : null}
      <FlatList
        data={info}
        renderItem={({ item }) => <InfoItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Form;
