import { StyleSheet } from "react-native";

export const MainStyle = StyleSheet.create({
  row: {
    marginLeft: -10
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  contentContainerStyle: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "black"
  },
  headerTitle: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 0,
    marginTop: 50,
    color: "#000",
    fontSize: 32,
    borderBottomColor: "rgba(0,0,0,0)",
    borderBottomWidth: 0,
  },
  formItem: {
    width: "100%",
    marginBottom: 15,
    position: "relative",
    
  },
  formBtn: {
    width: "100%",
    height: 50,
    marginBottom: 15,
    borderRadius: 5,
  },
  fromBtnText: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  formDropdown: {
    flex: 1,
    height: 40,
    width: "100%",
  },
  errorMessage :{
   color: "red",
   fontSize: 12
  }
});
