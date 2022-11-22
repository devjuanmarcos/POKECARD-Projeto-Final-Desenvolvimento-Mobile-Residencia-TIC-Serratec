import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imagemTamanho: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  rowStyle: {
    flexDirection: "row",
    marginTop: 10,
  },
  textWidth: {
    width: "50%",
    alignSelf: "flex-start",
    marginStart: 0,
    marginTop: 10,
  },
  imageWidth: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginStart: 25,
  },
});

export default styles;
