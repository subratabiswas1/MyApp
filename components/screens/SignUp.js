import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Image,
  Text,
  ActivityIndicator,
} from "react-native";
import React, { useState, useContext } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

const SignUp = ({ navigation }) => {
  const auth = FIREBASE_AUTH;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [_password, _setPassword] = useState("");
  const { isLoading, setIsLoading, signup } = useContext(AuthContext);

  const handleSignup = async () => {
    if (name === "") {
      alert("Enter a valid name");
    } else if (email === "") {
      alert("Enter a valid email");
    } else if (password && password === _password) {
      setIsLoading(true);
      setTimeout(async () => {
        try {
          const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
          );
          // alert("Account created successfully !!");
          signup(response);
        } catch (error) {
          alert("Signup Failed " + error.message);
        } finally {
          setIsLoading(false);
        }
      }, 500);
    } else {
      alert("passwords not matching");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: "https://picsum.photos/200/200" }}
      />
      <TextInput
        textContentType="name"
        value={name}
        placeholder="Enter your name"
        style={styles.inputbox}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        textContentType="emailAddress"
        value={email}
        placeholder="Enter email"
        style={styles.inputbox}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        textContentType="newPassword"
        secureTextEntry={true}
        value={password}
        placeholder="Enter a password"
        style={styles.inputbox}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        textContentType="newPassword"
        secureTextEntry={true}
        value={_password}
        placeholder="Re-enter the password"
        style={styles.inputbox}
        onChangeText={(text) => _setPassword(text)}
      />
      {isLoading ? (
        <View style={{ alignItems: "center" }}>
          <ActivityIndicator size={"large"} />
        </View>
      ) : (
        <Button
          title="Create Account"
          color={"green"}
          onPress={() => handleSignup()}
        />
      )}
      <Text style={{ textAlign: "center", margin: 20, fontSize: 16 }}>
        Already have an Account?{"  "}
        <Text
          style={{ color: "blue" }}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginHorizontal: 20,
  },
  img: {
    height: 200,
    width: 200,
    borderRadius: 500,
    margin: 70,
  },
  inputbox: {
    padding: 5,
    textAlign: "center",
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "black",
    elevation: 2,
  },
});
