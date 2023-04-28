import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    header:{
        backgroundColor: '#121212',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 5},
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomWidth: 5,
        borderBottomColor: '#413B33',
        height: 60,
    },

    menu:{
        position: 'absolute',
        left: 20,
        alignSelf: "center",
        top: 13,
    },

    logo:{
        width: 100,
        height: 35,
        alignSelf: "center",
        marginTop:15,
    },

    containerHeader:{
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    tituloHeader:{
        color: '#fff', 
        fontSize: 18, 
        fontFamily: fonts.text,
        marginLeft: 10,
        marginTop: 17,
    },

})