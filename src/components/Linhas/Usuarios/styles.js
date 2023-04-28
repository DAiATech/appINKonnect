import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
    SwipeableWhatsapp:{
        position: 'absolute',
        right: 0,
        left:0,
        top: 0,
        bottom: 0,
        backgroundColor: '#198225',
        height: 50,
        borderRadius: 10,
        alignItems: "flex-end",
    },

    SwipeableEdit:{
        position: 'absolute',
        right: 65,
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#4d8ac4',
        height: 50,
        borderRadius: 10,
        alignItems: "flex-end",
        zIndex: 9,
    },

    SwipeableDelete:{
        position: 'absolute',
        right: 150,
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#c4101e',
        height: 50,
        borderRadius: 10,
        alignItems: "flex-start",
        zIndex: 9,
    },

    SwipeableArquivo:{
        position: 'absolute',
        right: 140,
        left: 65,
        top: 0,
        bottom: 0,
        backgroundColor: '#101687',
        height: 50,
        borderRadius: 10,
        alignItems: "flex-start",
        zIndex: 9,
    },

    whatsapp:{
        marginRight: 20,
        marginTop: 8,
    },

    edit:{
        marginRight: 25,
        marginTop: 8,
    },

    delete:{
        marginLeft: 18,
        marginTop: 8,
    },

    arquivo:{
        marginLeft: 18,
        marginTop: 8,
    },
})