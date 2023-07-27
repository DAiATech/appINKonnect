import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        flex: 1,
        padding: 10,
    },

    /* Header */
    header: {
        backgroundColor: '#121212',
        borderBottomWidth: 3,
        borderBottomColor: "#413B33",
        height: 60,
        paddingTop: 10,
        paddingBottom: 30,
        marginBottom: 5,
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
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

    /* Main */
    /* Search: */




    /* Feed */

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




    box: {
        backgroundColor: '#fafafa',
        padding: 5,
        width: '100%',
        height: 50,
        justifyContent: "center",
        marginBottom: 10,
        zIndex: 11,
        borderRadius: 10,
    },

    loading: {
        marginTop: 10,
        marginBottom: 10,
    },



    search: {
        padding: 10,
        width: '90%',

    },

    containerSearch: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 25,
        backgroundColor: '#1B292F',
        borderRadius: 25,
    },

    iconSearch: {
        alignSelf: 'center',
    },





    buttonWhatsapp: {
        width: 100,
        height: 42,
        backgroundColor: "green",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        left: -3,
        zIndex: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    buttonEdit: {
        width: 100,
        height: 42,
        backgroundColor: "#c1c1c1",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        left: 3,
        borderRadius: 10,
        zIndex: 9,
    },


    containerFloat: {
        bottom: 20,
        right: 20,
        position: 'absolute',
        backgroundColor: 'green',
        borderRadius: 10,
        zIndex: 9,
        width: 50,
        height: 50,
        justifyContent: "center",
    },

    CartButton: {
        justifyContent: "center",
        alignItems: "center",
    },
})