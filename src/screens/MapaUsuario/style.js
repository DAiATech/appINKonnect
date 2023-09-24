import { StyleSheet } from "react-native";

export const css = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        flex: 1,
    },
    map: {
        height: '80%',
        width: '80%',
        alignSelf: 'center',
    },

    marcador: {
        width: 90,
        height: 70,
        backgroundColor: '#C6AC8F',
        flexDirection: 'column',
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#C6AC8F'
    },
    marcadorImage: {
        width: '100%',
        height: '70%',
        resizeMode: 'cover',
    },
    marcadorDestino: {
        width: 90,
        height: 70,
        backgroundColor: '#000',
        flexDirection: 'column',
        borderRadius: 8,
        alignItems: 'center'
    },

})