import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    /* Header */
    container:{
        flex:1,
        backgroundColor:'#121212',        
    },

    containerHeader: {
        backgroundColor: '#121212',
        height: 180,
        marginBottom: 30,
    },
    headerBackground: {
        backgroundColor: '#f0f',
        width: '100%',
        height: '80%',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '150%',
    },
    headerFooter: {
        height: 100,
        flexDirection: 'row',
    },

    headerContainerNameBtn: {
        flexDirection: 'column',
        gap: 15,
        left: 50,
        top: 50,
    },
    headerUserName: {
        fontSize: 27,
        fontWeight: '600',
        color: '#fff',
    },
    HeaderBtnEstudio: {
        width: 150,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#1B292F',
        justifyContent: 'center'
    },
    HeaderBtnEstudioText: {
        alignSelf: 'center',
        color: '#C6AC8F',
        fontSize: 15,
        fontWeight: '600',
    },

    /* Main content */
    mainConatiner: {
        width: "100%",
        height: "100%",
        padding: 20,
        top: 25,
    },
    userDataText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#fff',
        margin: 10,
    },
    userDataContainer: {
        flexDirection: 'column',
        paddingLeft: 10,
    },


    feedContainer: {
        width: '90%',
        alignSelf: 'center',
    },   

    menu: {
        left: 25,
        top: 25,
        width: 100,
        height: 100,
        alignSelf: "center",
        position: 'absolute',
    },

    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
        alignSelf: "center",

    },

    profilePicture: {
        width: 90,
        height: 90,
        borderRadius: 50,
        resizeMode: 'contain',
        left: 20,
        marginTop: 20,
        backgroundColor:'#f0f'
    },
})