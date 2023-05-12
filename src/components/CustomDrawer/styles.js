import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        
    },

    Pages:{
        flexDirection: 'row',
        marginTop: 15,
    },

    Sair:{
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
        alignContent: 'center'
    },

    iconRegistered:{
        justifyContent: 'center',
        alignSelf: 'center',
    },

    PagesText:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#EAE0D5',
        alignSelf: "center",
        marginLeft: 10,
    },

    SairText:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#EAE0D5',
        alignSelf: "center",
        marginLeft: 20,
    },

    footer:{
        padding: 10,
    },

    logo:{
        width: 120,
        height: 35,
        alignSelf: "center",
        resizeMode: 'contain',
        alignSelf: "center",
        marginTop: 15,
        marginBottom: 10
    },
})