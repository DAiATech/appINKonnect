import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
    },

    /* Header */
    containerHeader: {
        backgroundColor: '#121212',
        height: 180,
        marginBottom: 30,
    },
    headerBackground: {
        backgroundColor: '#413B33',
        width: '100%',
        height: '80%',
    },
    headerFooter: {
        height: 100,
        flexDirection: 'row',
    },
    headerUserName: {
        fontSize: 25,
        fontWeight: '600',
        color: '#fff',
        marginLeft: 30,
        marginTop: 10,
    },


    /* Main content */
    mainConatiner: {
        width: "100%",
        height: 500,
        padding: 20,
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

    returnBtn: {

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
        left: 16,
        marginTop: -30,
    },

    titleTasks: {
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 50,
    },

    greeting: {
        fontSize: 18,
        color: colors.heading,
        fontFamily: fonts.text,
        alignSelf: "center",
    },

    userName: {
        fontSize: 22,
        color: colors.heading,
        lineHeight: 40,
        fontFamily: fonts.text,
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 30
    },

    lenghtText: {
        color: colors.green,
        fontSize: 35,
        fontFamily: fonts.text,
    },

    tasks: {
        marginTop: 20,
        marginBottom: 50,
    },

    taskBackground: {
        backgroundColor: '#333333'
    },

    tasksText: {
        marginTop: 10,
        fontSize: 20,
        marginBottom: 10,
        color: '#000'
    },

    logout: {
        position: 'absolute',
        right: 0,
        color: colors.red,
        alignSelf: "center"
    },

    containerBox: {
        width: '85%',
        alignSelf: "center",
        marginBottom: 25,
    },

    box: {
        backgroundColor: 'gray',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        marginTop: 30,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 1 },

    },

    rText: {
        fontSize: 20,
        color: 'gray',
        fontFamily: fonts.text,
    },

    textFooter: {
        borderTopColor: '#ccc',
        paddingTop: 15,
        paddingBottom: 10,
        borderTopWidth: 1,
        color: '#FFF',
        backgroundColor: '#871003',
        textAlign: 'center',
        fontSize: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        fontFamily: fonts.text,
    },

    iconRegistered: {
        justifyContent: 'center',
        alignSelf: 'center',
    },

    textos: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    circleProgressView: {
        flexDirection: 'row',
        alignSelf: "center",
        marginTop: 20,
    },

    textProgress: {
        fontFamily: fonts.text,
        fontSize: 16,
        color: 'f0f',
    },

    textProgressTitle: {
        fontFamily: fonts.text,
        fontSize: 20,
        color: '#000',
    },

    textProgressContainer: {
        alignSelf: "center",
        marginRight: 20,
    },

    numberInside: {
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#000',
        textDecorationLine: 'underline',

    },

    boxContainer: {
        marginRight: 20,
        width: 200,
        marginLeft: 10,
    }
})