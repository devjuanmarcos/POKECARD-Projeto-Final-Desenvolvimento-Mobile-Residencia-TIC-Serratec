import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#999999',
        paddingTop: 60,
        paddingHorizontal: 30
    },
    header:{
        paddingTop: 20,
        position:'relative',
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: 15
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        //marginBottom: 40,
        marginLeft: 20,
    },
    lista: {
        height: 100
    },
    
})