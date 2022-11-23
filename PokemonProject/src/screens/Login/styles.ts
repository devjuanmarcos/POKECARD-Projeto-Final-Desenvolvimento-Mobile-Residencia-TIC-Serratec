import { StyleSheet } from 'react-native'
import { shadow } from 'react-native-paper';

const styles = StyleSheet.create({
    bgDark: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        marginBottom: 0,
        zIndex: 9
    },
    logo: {
        display: 'flex',
        alignSelf: 'center',
        width: '60%',
        height: '60%',
        resizeMode: "contain",
        marginVertical: -100,
    },
    input: {
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'blue',
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#000',
        fontSize: 20,
        shadow: '100%',
        shadowColor: '#000'
    },
    input2: {
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
        
    },
    textSmall: {
        color: 'rgba(255,255,255,0.6)',
        marginTop: 160,
        textAlign: 'center',
    },

    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        width: 400, 
        height: 400,
    },


})

export default styles;