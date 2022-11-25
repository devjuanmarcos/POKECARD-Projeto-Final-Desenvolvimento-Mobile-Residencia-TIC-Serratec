import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        width: "90%",
    },
    text: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'justify',
        //marginLeft: 130
    },
    textTitle: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'justify',
        marginRight: 2
    },
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#12100055',
        alignContent: 'center'
    },
    modalContainer: {
        backgroundColor: '#121000',
        borderRadius: 20,
        padding: "5%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "80%",
        maxHeight: "80%",
    },
    firstStatsContainer: {
        flexDirection: "row",
        
    },
    descriptionContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: 'space-evenly'
    },
    firstStats: {
        flexDirection: "column",
        width: "30%",
        marginHorizontal: 5
    },
    image: {
        width: 245,
        height: 342,
        position: 'relative',
    },
    scrollContainer: {
        paddingHorizontal: 20
    }
})