import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    /* Container */
    container: {
        backgroundColor: '#121212',
        flex: 1,
        padding: 10,
    },

    botaoAbrirCalendario: {
        backgroundColor: '#1B292f',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: 250,
        alignSelf: 'center',
        marginTop: 20,
    },
    containerCalendario: {
        padding: 5,
        backgroundColor: '#1B292f',
        marginTop: 20,
        borderRadius: 20
    },
    removeItem: {
        marginTop: 10,
        marginLeft: 5
    },
    calendarStyle: {
        borderRadius: 20,
        borderWidth: 1,
        height: 400,
        marginHorizontal: 25,
        marginTop: 25, marginBottom: 20
    },
    btnFecharContainerCalendario: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginRight: 10,
        marginTop: 15,
    },
    /* Modal */
    ModalTitle: {
        fontFamily: fonts.text,
        fontSize: 20,
        fontWeight: '900',
        marginBottom: 12,
        alignSelf: 'center'
    },

    modalCentralizar: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.37)'
    },

    modalCard: {
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        paddingHorizontal: 15,
        marginHorizontal: 15,
        paddingBottom: 15,
        height: 650,
        borderRadius: 20,
    },

    modalItemSection: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 25,
    },

    modalItemSectionAnotacao: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 25,
        marginBottom: 35,
    },

    imgProfilePicture: {
        width: 25,
        height: 25,
        borderRadius: 50,
        resizeMode: 'contain',
        marginRight: -20,
    },


    /* Modal Buttons */
    btnModalClose: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginRight: 10,
        marginTop: 15,
    },

    btnCadastrar: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B292F',
        marginTop: 30,
        width: '100%',
        height: 50,
        borderRadius: 10,
    },

    btnHoras: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B292F',
        marginTop: 30,
        width: 150,
        height: 45,
        borderRadius: 5,
    },


    /* Modal Text */
    textItem: {
        fontFamily: fonts.text,
        fontSize: 20,
        fontWeight: '900',
        marginLeft: 30,
        color: '#808080',
    },

    textTatuadorName: {
        fontSize: 20,
        fontWeight: '900',
        marginLeft: 30,
    },

    textDataValue: {
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#808080',
    },

    textBtnHoras: {
        fontFamily: fonts.text,
        fontSize: 18,
        fontWeight: '900',
        color: '#C6AC8F',
    },
    textBtnCadastrar: {
        fontFamily: fonts.text,
        fontSize: 18,
        fontWeight: '900',
        color: '#C6AC8F',
    },

    Icon: {
        position: 'absolute',
    },


    /* Modal Inputs */
    InputAnotacoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#000',
        width: 200,
        height: 80,
        padding: 10,
        borderColor: '#413B33',
        borderWidth: 1.5,
        fontSize: 20,
        borderRadius: 15,
        marginBottom: -45,
        textAlignVertical: "top",
    },

    InputText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#000',
        width: 200,
        padding: 10,
        borderColor: '#413B33',
        borderWidth: 1.5,
        fontSize: 20,
        borderRadius: 15,

    },
})