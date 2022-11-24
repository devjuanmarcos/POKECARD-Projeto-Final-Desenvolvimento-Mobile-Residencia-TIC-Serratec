import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    display: "flex",
    alignSelf: "center",
    width: "60%",
    height: "60%",
    resizeMode: "contain",
    marginVertical: -100,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 90,
    zIndex: 9,
    padding: 20, //tirar depois
  },
  textInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    /*  paddingLeft: 15, */
    borderColor: "#fff000",
    backgroundColor: "black",
    opacity: 0.4,
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  buttom: {
    marginBottom: 20,
    width: "100%",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "black",
    opacity: 0.4,
    marginVertical: 30,
  },
  textSmall: {
    color: "rgba(255,255,255,0.6)",
    marginTop: 0,
    textAlign: "center",
  },
  buttom2: {
    color: "white",
    textAlign: "center",
    fontSize: 27,
  },
});

export default styles;
