import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 50,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "300",
  },
  inputBox: {
    borderBottomWidth: 1,
    elevation: 1,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "100",
    marginBottom: 20,
  },
  btn: {
    margin: 5,
    marginHorizontal: 20,
  },
  headingText: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
    marginHorizontal: 20,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    alignItems: "stretch",
    marginHorizontal: 20,
  },
  itemText: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    margin:5,
  },
  chartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  chartHeader: {
    textAlign: "center",
    fontSize: 30,
    padding: 16,
    textDecorationLine: "underline",
  },
  graphStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default styles;
