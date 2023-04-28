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
        height: 95,
        borderRadius: 10,
        alignItems: "flex-end",
    },

    SwipeableEdit:{
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#4d8ac4',
        height: 60,
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
        height: 60,
        borderRadius: 10,
        alignItems: "flex-start",
        zIndex: 9,
    },
    
   

    edit:{
        marginRight: 15,
        marginTop: 12,
    },

    delete:{
        marginLeft: 20,
        marginTop: 12,
    },


   
})