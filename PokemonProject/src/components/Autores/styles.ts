import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imagemTamanho: {
    width: 100,
    height: 100,
    borderRadius:50,
    marginTop:-150,
    borderWidth:3,
    borderColor:'black'
  },
  title:{
    color: "#f6c052",
    fontSize: 17,
    marginLeft: 2,
    fontWeight: "bold",
    alignItems: "center",
    flexDirection: "row",
  },
  home: {
    marginTop:50,
    marginBottom:20,
    marginLeft:10,
    position:'relative',
    height: 40,
    width: 90,
    backgroundColor: "#567088",
    borderWidth: 2,
    borderColor:'#000',
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
    backgroundColor: "#f6c052",
  },
  rowStyle: {
    justifyContent:'center',
    height:250,
    borderTopColor:'#c22',
    borderTopWidth:50,
    backgroundColor:'#e3e8ec',    
    padding:15,
    alignItems:'center',
    flexDirection: "row",
    marginTop: 10,
    borderRadius:50,
    marginHorizontal:20,
    marginBottom:10,
    shadowOpacity: 0.5,
    elevation: 50,
    shadowRadius: 1,
    shadowOffset: { width: 57, height: 13 },
  },
  textWidth: {
    
    width: "100%",
    alignItems:'center',
    textAlign:'center'
    
    
  },
  imageWidth: {

    marginTop: 10,
    flexDirection: "row",
    position:'absolute',
    borderRadius:50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display:'flex',
    shadowOpacity: 0.5,
    elevation: 50,
    shadowRadius: 1,
    shadowOffset: { width: 57, height: 13 },
    
  },

});

export default styles;
