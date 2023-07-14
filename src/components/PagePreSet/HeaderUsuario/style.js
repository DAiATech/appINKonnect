import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


    header: {
        margin: 10,
        backgroundColor: '#121212',
        borderBottomWidth: 3,
        borderBottomColor: "#413B33",
        height: 60,
        paddingTop: 10,
        paddingBottom: 30,
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
        /*         position:'absolute',
         */        /*  alignSelf: "center", */
    },

    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 50,
        resizeMode: 'contain',
        left: 20,
        position: 'absolute'
    },

    containerHeader: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },


});