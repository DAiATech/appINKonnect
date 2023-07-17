import { StyleSheet } from "react-native";

export const css = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        flex: 1,
    },
    map: {
        height: '80%',
        width:'80%',
        alignSelf:'center',
    },
    
    marcador: {
        width: 90,
        height: 70,
        backgroundColor: '#f0f',
        flexDirection: 'column',
        borderRadius: 8,
        alignItems: 'center'
    },
    marcadorDestino: {
        width: 90,
        height: 70,
        backgroundColor: '#000',
        flexDirection: 'column',
        borderRadius: 8,
        alignItems: 'center'
    },
    marcadorImage: {
        width: 90,
        height: 45,
        resizeMode: 'cover',
    },
})