import { StyleSheet, Platform } from "react-native";
import { shadow } from "react-native-paper";

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '',
        alignItems:'center',
        padding:10,
        

    },
    header:{
        paddingTop: 20,
        position:'relative',
        flexDirection:'row',
        
    },
    headerButton:{
        display:'flex',
        flexDirection:'row',
        
    },
    button:{
        color:'#000',
        height:20,
        shadow:10,
        shadowColor:'#000000',
        shadowOpacity:10
    },
    content:{
        padding:10,
        flexDirection:'row',
        direction:'inherit'
       
    },
    text: {
        color: '#000'
    },
    buttonPlay: {
        marginVertical: 20,
       
    },
    title:{
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        padding:5

    },

});
      
export default styles;
