import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
        alignSelf: "center",
        marginLeft:'28%',
    },

    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 50,
        resizeMode: 'contain',
        left: 20,
    },

    containerHeader: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
    },

});