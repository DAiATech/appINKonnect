import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        flex: 1,
        alignItems: 'center',
    },
    containerlogo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 100,
    },
    logo: {
        width: 200,
        height: 70,
        resizeMode: 'contain',
        alignSelf: "center",
    },
    Title: {
        color: '#C6AC8F',
        fontWeight: '600',
        fontSize: 20,
    },
   
    containerButtons: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 200,
    },
    buttonArtist: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B292F',
        width: 200,
        height: 60,
        borderRadius: 10,
        padding: 10,
        marginTop:50,

    },
    buttonClient: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B292F',
        width: 200,
        height: 60,
        borderRadius: 10,
        padding: 10,
    },
    Buttontext: {
        color: '#EAE0D5',
        fontSize: 16,
        fontWeight: '600',
    }
});