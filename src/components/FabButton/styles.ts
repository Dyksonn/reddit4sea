import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute"
  },
  button: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10,
      width: 0
    }
  },
  menu: {
    backgroundColor: "#152238"
  },
  submenu: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: "#152238"
  }
})