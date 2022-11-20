import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textImput: {
        height: 50,
        width: '80%',
        padding: Platform.OS === 'ios' ? 15 : 10,
    },
    
    text: {
        color: '#000'
    },
    buttonPlay: {
        marginVertical: 20,
    },

});
      
export default styles;
