import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#203354",
    padding: 8,
    borderRadius: 8
  },
  containerTimer: {
    alignSelf: "flex-end"
  },
  content: {
    flex: 1,
    padding: 10,
  },
  subContent: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  },
  title: {
    fontSize: 17,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginTop: 10
  },
  infos: {
    fontSize: 12,
    color: "#FFFFFF",
    lineHeight: 30
  },
  bold: {
    fontSize: 13,
    fontWeight: "bold",
  },
  timer: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: '700'
  },
  containerImage: {
    width: 70,
    height: 100
  },
  image: {
    flex: 1
  }
})