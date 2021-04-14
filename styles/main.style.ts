import { StyleSheet } from "react-native";

export const MainStyle = StyleSheet.create({
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
  },
  headerTitle: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
    color: "#000",
    fontSize: 32,
    borderBottomColor: "rgba(0,0,0,0)",
    borderBottomWidth: 0,
  },
  formItem: {
    width: "100%",
    marginBottom: 15,
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
});
