import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        flex: 1,
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
        borderBottomWidth: 0.6,
        borderBottomColor: "gray",
        padding: 10,
        width: '90%',

    },

    containerSearch: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 25,
    },

    iconSearch: {
        alignSelf: 'center',
        paddingLeft: 10,
        top: 10
    },

    header: {
        backgroundColor: '#fafafa',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 5 },
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 80,
    },

    menu: {
        position: 'absolute',
        left: 20,
        alignSelf: "center",
        top: 20,
    },

    logo: {
        width: 175,
        height: 60,
        alignSelf: "center",
        marginTop: 5,
    },

    containerHeader: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
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
    containerButtons: {
        backgroundColor: '#121212',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 15,
        padding: 15,
        paddingBottom: 20,
    },
    btnSearchProfile: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B292F',
        width: 40,
        height: 40,
        borderRadius: 50,
        padding: 10,
    },
    btnImage: {
        width: 40,
        resizeMode: 'contain',
    },
    containerMain: {
        flex: 1,
        height: 100,
        backgroundColor: '#fff',
    },
})