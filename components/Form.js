import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Button, FlatList } from "react-native";
import styles from "../styles/styles";
import uuid from "react-native-uuid";

const Form = ({ navigation, dark }) => {
  const [text, setText] = useState("");
  const [numeric, setNumeric] = useState("");
  const [error, setError] = useState(false);
  const [info, setInfo] = useState([]);

  const addEvent = () => {
    if (text !== "" && numeric !== "") {
      setInfo([...info, { id: uuid.v4(), username: text, expense: numeric }]);
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
      navigation.navigate("Data Visualisation", info);
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
        placeholder="username"
        placeholderTextColor={dark ? "#6b5f62" : "#bdb1b4"}
        style={boxStyle}
        value={text}
        onChangeText={(e) => setText(e)}
      />
      <TextInput
        placeholder="expense"
        placeholderTextColor={dark ? "#6b5f62" : "#bdb1b4"}
        style={boxStyle}
        value={numeric}
        keyboardType="numeric"
        onChangeText={(e) => setNumeric(e)}
      />
      {error && !(text && numeric) ? (
        <Text style={{ color: "red" }}>*All fields are required</Text>
      ) : null}
      <View style={styles.btn}>
        <Button
          title="Add"
          color={dark ? "#24401d" : "green"}
          onPress={() => addEvent()}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Clear"
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
      {info.length ? (
        <View style={styles.headingText}>
          <Text style={[styles.itemText, {fontWeight:600, textDecorationLine: "underline" ,color:dark ? 'white' : 'black'}]}>
            Username
          </Text>
          <Text style={[styles.itemText, {fontWeight:600, textDecorationLine: "underline" ,color:dark ? 'white' : 'black'}]}>
            Expense(in $)
          </Text>
          <Text style={styles.itemText}></Text>
        </View>
      ) : null}
      <FlatList
        data={info}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={[styles.itemText,{color: dark ? 'white' : 'black'}]}>{item.username}</Text>
            <Text style={[styles.itemText,{color: dark ? 'white' : 'black'}]}>{item.expense}</Text>
            <View style={{ flex: 1 }}>
              <Button
                title="delete"
                color={dark ? "#5c202d" : 'red'}
                onPress={() => setInfo(info.filter((a) => a.id !== item.id))}
              />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Form;
