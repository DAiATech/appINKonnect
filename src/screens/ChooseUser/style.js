import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
    },
    backgroundImg: {
        flex: 1,
        width:'100%',
        justifyContent: 'center',
      },
      containerContent:{
        flex:1,
        alignItems: 'center',
        gap: 200,
      },
    containerlogo: {
        display: 'flex',
        flexDirection: 'column',
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
        width: '80%',

    },
    buttonArtist: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B292F',
        width: '100%',
        height: 70,
        borderRadius: 10,
        padding: 10,
        marginTop: 50,

    },
    buttonClient: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B292F',
        width: '100%',
        height: 70,
        borderRadius: 10,
        padding: 10,
    },
    Buttontext: {
        color: '#EAE0D5',
        fontSize: 16,
        fontWeight: '600',
    },
});