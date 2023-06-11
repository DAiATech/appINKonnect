import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        flex: 1,
        padding: 10,
    },
    feedContainer: {
        width: '90%',
        alignSelf: 'center',
    },
    header: {
        backgroundColor: '#121212',
        borderBottomWidth: 3,
        borderBottomColor: "#413B33",
        height: 60,
        paddingTop: 10,
        paddingBottom: 30,
        marginBottom: 5,
    },

    menu: {
        left: 20,
        height: 40,
        alignSelf: "center",
        left: 20
    },

    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
        alignSelf: "center",

    },

    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 50,
        resizeMode: 'contain',
        right: 20,
    },

    containerHeader: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
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
    },
    btnCreatePost: {
        right: 25,
        bottom: 25,
        zIndex: 100,
        width: 70,
        height: 70,
        position: 'absolute',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#1B292F',
        borderRadius: 50,
    },
    btnIcon: {
    },
    containerSearch: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 25,
        backgroundColor: '#1B292F',
        borderRadius: 25,
    },


    search: {
        padding: 10,
        width: '90%',
        color:'#C6AC8F'
    },



    iconSearch: {
        alignSelf: 'center',
    },
    /* sss */

   
})