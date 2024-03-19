import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Image,
  Text,
  ActivityIndicator,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { AuthContext } from "../context/AuthContext";

const Login = ({ navigation }) => {
  const auth = FIREBASE_AUTH;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, setIsLoading, login } = useContext(AuthContext);

  const handleLogin = async () => {
    if (email === "") {
      alert("Enter a valid email");
    } else if (password) {
      setIsLoading(true);
      setTimeout(async () => {
        try {
          const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          // alert("Login successful !!");
          login(response);
        } catch (error) {
          alert("Login Failed " + error.message);
        } finally {
          setIsLoading(false);
        }
      }, 500);
    } else {
      alert("Enter correct password");
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: "https://picsum.photos/200/200" }}
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
        placeholder="Enter password"
        style={styles.inputbox}
        onChangeText={(text) => setPassword(text)}
      />
      {isLoading ? (
        <View style={{ alignItems: "center" }}>
          <ActivityIndicator size={"large"} />
        </View>
      ) : (
        <Button title="Login" color={"green"} onPress={() => handleLogin()} />
      )}
      <Text style={{ textAlign: "center", margin: 20, fontSize: 16 }}>
        Don't have an Account?{" "}
        <Text
          style={{ color: "blue" }}
          onPress={() => navigation.navigate("Create Account")}
        >
          Create Account
        </Text>
      </Text>
    </View>
  );
};

export default Login;

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
