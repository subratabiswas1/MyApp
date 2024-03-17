import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex:1,
    justifyContent:'center',
  },
  container: {
    flexDirection: "row",
    marginTop: 20,
  },
  formContainer: {
    flex: 1,
    margin: 5,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
    fontWeight:'300'
  },
  inputBox: {
    borderBottomWidth:1,
    shadowColor:'black',
    textAlign: "center",
    fontSize: 20,
    fontWeight:'100',
    marginBottom: 10,
  },
  btn:{
    flex:1,
    flexDirection:'column',
    marginHorizontal:10,
  },
  chartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  chartHeader: {
    textAlign: 'center',
    fontSize: 30,
    padding: 16,
    textDecorationLine:'underline'
  },
  graphStyle:{
    marginVertical: 8,
    borderRadius: 16,
  }
});

export default styles;
