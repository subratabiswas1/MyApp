import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import styles from "../styles/styles";

const Form = ({ navigation, dark }) => {
  const [user1, setUser1] = useState({ name: "", data: "" });
  const [user2, setUser2] = useState({ name: "", data: "" });
  const [user3, setUser3] = useState({ name: "", data: "" });
  const [user4, setUser4] = useState({ name: "", data: "" });
  const [user5, setUser5] = useState({ name: "", data: "" });
  const [error, setError] = useState(false);
  const allFilled =
    user1.name &&
    user1.data &&
    user2.name &&
    user2.data &&
    user3.name &&
    user3.data &&
    user4.name &&
    user4.data &&
    user5.name &&
    user5.data;

  const handleSubmit = () => {
    if (allFilled) {
      setError(false);
      navigation.navigate("Dashboard", {
        user1,
        user2,
        user3,
        user4,
        user5,
      });
    } else {
      setError(true);
    }
  };
  const clearEvent = () => {
    setUser1({ name: "", data: "" });
    setUser2({ name: "", data: "" });
    setUser3({ name: "", data: "" });
    setUser4({ name: "", data: "" });
    setUser5({ name: "", data: "" });
    setError(false);
  };
  const sampleDataEvent = () => {
    setUser1({ name: "subrata", data: "50" });
    setUser2({ name: "biswas", data: "10" });
    setUser3({ name: "neeraj", data: "70" });
    setUser4({ name: "navin", data: "40" });
    setUser5({ name: "rajdip", data: "20" });
    setError(false);
  };
  const boxStyle = [
    styles.inputBox,
    {
      color: dark ? "white" : "black",
      borderColor: dark ? "white" : "black",
    },
  ];

  return (
    <View style={[styles.main, { backgroundColor: dark ? "#292929" : null }]}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={[styles.heading, { color: dark ? "white" : "black" }]}>
            Username
          </Text>
          <TextInput
            placeholder="User 1"
            placeholderTextColor={dark ? "white" : "black"}
            style={boxStyle}
            value={user1.name}
            onChangeText={(text) => setUser1({ name: text, data: user1.data })}
          />
          <TextInput
            placeholder="User 2"
            placeholderTextColor={dark ? "white" : "black"}
            style={boxStyle}
            value={user2.name}
            onChangeText={(text) => setUser2({ name: text, data: user2.data })}
          />
          <TextInput
            placeholder="User 3"
            placeholderTextColor={dark ? "white" : "black"}
            style={boxStyle}
            value={user3.name}
            onChangeText={(text) => setUser3({ name: text, data: user3.data })}
          />
          <TextInput
            placeholder="User 4"
            placeholderTextColor={dark ? "white" : "black"}
            style={boxStyle}
            value={user4.name}
            onChangeText={(text) => setUser4({ name: text, data: user4.data })}
          />
          <TextInput
            placeholder="User 5"
            placeholderTextColor={dark ? "white" : "black"}
            style={boxStyle}
            value={user5.name}
            onChangeText={(text) => setUser5({ name: text, data: user5.data })}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={[styles.heading, { color: dark ? "white" : "black" }]}>
            Expense (in $)
          </Text>
          <TextInput
            placeholder="Data 1"
            placeholderTextColor={dark ? "white" : "black"}
            style={boxStyle}
            value={user1.data}
            keyboardType="number-pad"
            onChangeText={(text) => setUser1({ name: user1.name, data: text })}
          />
          <TextInput
            placeholder="Data 2"
            placeholderTextColor={dark ? "white" : "black"}
            style={boxStyle}
            value={user2.data}
            keyboardType="number-pad"
            onChangeText={(text) => setUser2({ name: user2.name, data: text })}
          />
          <TextInput
            placeholder="Data 3"
            placeholderTextColor={dark ? "white" : "black"}
            style={boxStyle}
            value={user3.data}
            keyboardType="number-pad"
            onChangeText={(text) => setUser3({ name: user3.name, data: text })}
          />
          <TextInput
            placeholder="Data 4"
            placeholderTextColor={dark ? "white" : "black"}
            style={boxStyle}
            value={user4.data}
            keyboardType="number-pad"
            onChangeText={(text) => setUser4({ name: user4.name, data: text })}
          />
          <TextInput
            placeholder="Data 5"
            placeholderTextColor={dark ? "white" : "black"}
            style={boxStyle}
            value={user5.data}
            keyboardType="number-pad"
            onChangeText={(text) => setUser5({ name: user5.name, data: text })}
          />
        </View>
      </View>
      <View style={styles.btn}>
        {error && !allFilled ? (
          <Text style={{ color: "red" }}>*All fields are required</Text>
        ) : null}
        <View>
          <Button
            title="Submit"
            color={dark ? "#24401d" : "green"}
            onPress={() => handleSubmit()}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            title="Clear All"
            color={dark ? "#283f6b" : null}
            onPress={() => clearEvent()}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            title="sample dataset"
            color={dark ? "#6e5125" : "orange"}
            onPress={() => sampleDataEvent()}
          />
        </View>
      </View>
    </View>
  );
};

export default Form;
