import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imagemTamanho: {
    width: 90,
    height: 90,
  },
  title:{
    color: "#f6c052",
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "bold",
    alignItems: "center",
  },
  home: {
    marginTop:50,
    marginBottom:30,
    marginLeft:10,
    position:'relative',
    height: 40,
    width: 90,
    backgroundColor: "#b15241",
    borderWidth: 2,
    borderColor:'#f6c052',
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  icone:{
    alignItems:'center'
  },
  container: {
    marginBottom:5,
    backgroundColor: "#567088",
  },
  rowStyle: {
    borderTopColor:'#c22',
    borderTopWidth:15,
    backgroundColor:'#e3e8ec',    
    padding:5,
    alignItems:'center',
    
    flexDirection: "row",
    marginTop: 15,
  },
  textWidth: {
    width: "60%",
    alignItems:'center',
    marginStart: 0,
    marginTop: 10,
    
  },
  imageWidth: {
  
    borderRadius:50,
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    marginStart: 20,
  },

});

export default styles;
