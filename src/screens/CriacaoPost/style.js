import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    main: {
        backgroundColor: '#121212',
        paddingHorizontal: 100,
        paddingTop: 20,
        paddingBottom: 50,

    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 3,
        backgroundColor: '#f0f',/* 123ab4 */
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
    },
    avatar: {
        flex: 1,
        borderRadius: 20,
        zIndex: 10,
    },
    addImageContainer: {
        width: 280,
        height: 280,
        borderRadius: 20,
        borderWidth: 5,
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: "center",
        alignItems: 'center',
        zIndex: 11,
        borderColor: '#413B33',
    },
    imgContainer: {
        position: 'absolute',
        width: 280,
        height: 280,
        alignSelf: 'center',
        marginTop: 40,
    },
    InputDescricao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#C6AC8F',
        width: 200,
        height: 120,
        padding: 10,
        marginBottom: 0,
        borderColor: '#413B33',
        borderWidth: 3,
        fontSize: 20,
        textAlignVertical: "top",
        borderRadius: 15,
        marginTop: 50,

    },
    selectEspecialidade: {
        height: 50,
        width: 210,
        backgroundColor: '#1B292F',
        color: '#C6AC8F',
        zIndex: 20,
    },
    btnConfirmar: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B292F',
        width: '100%',
        height: 60,
        borderRadius: 10,
        marginTop: 50,
    },
    btnText: {
        color: '#C6AC8F',
        fontSize: 20,
        fontWeight: '700',
    },
    pickerText: {
        color: '#C6AC8F',
        height: '100%',
        backgroundColor: '#1B292F',
    },
})