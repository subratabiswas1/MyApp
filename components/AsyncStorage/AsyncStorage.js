import AsyncStorage from "@react-native-async-storage/async-storage";

export const setUser = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("userToken", jsonValue);
  } catch (e) {
    alert(e);
  }
};

export const getUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("userToken");
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert(e);
  }
};
export const removeUser = async () => {
  try {
    await AsyncStorage.removeItem("userToken");
  } catch (e) {
    alert(e);
  }
};
export const setInformation = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("info", jsonValue);
  } catch (e) {
    alert(e);
  }
};

export const getInformation = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("info");
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert(e);
  }
};
export const removeInformation = async () => {
  try {
    await AsyncStorage.setItem('info','');
  } catch (e) {
    alert(e);
  }
};
