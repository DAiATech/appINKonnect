import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: 20,
    },

    /* Header */
    header: {
        paddingBottom: 20,
        borderBottomColor: '#413B33',
        borderBottomWidth: 3,
        paddingLeft: 10,
    },
    perfilImg: {
        width: 60,
        height: 60,
        borderRadius: 50,
        resizeMode: 'contain',
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 10,

    },
    perfilName: {
        color: "#EAE0D5",
        fontSize: 20,
        fontWeight:'600',
    },

    /* ..... */
    Pages: {
        flexDirection: 'row',
        marginTop: 15,
        paddingLeft: 10,

    },



    iconRegistered: {
        justifyContent: 'center',
        alignSelf: 'center',
    },

    PagesText: {
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#EAE0D5',
        alignSelf: "center",
        marginLeft: 10,
    },

    SairText: {
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#EAE0D5',
        alignSelf: "center",
        marginLeft: 20,
    },


    /* Footer */
    footer: {
        backgroundColor: '#121212',
    },
    logo: {
        width: 100,
        height: 35,
        alignSelf: "center",
        resizeMode: 'contain',
        alignSelf: "center",
        marginTop: 15,
        marginBottom: 10,
    },
    footerImgDiv: {
        borderTopColor: '#413B33',
        borderTopWidth: 3,
    },
    btnSair: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
        alignContent: 'center'
    },

})