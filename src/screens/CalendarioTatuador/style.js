import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        flex: 1,
    },

    box: {
        backgroundColor: '#fafafa',
        padding: 5,
        width: '100%',
        height: 50,
        justifyContent: "center",
        marginBottom: 10,
        zIndex: 11,
        borderRadius: 10,
    },

    loading: {
        marginTop: 10,
        marginBottom: 10,
    },

    search: {
        borderBottomWidth: 0.6,
        borderBottomColor: "gray",
        padding: 10,
        width: '90%',

    },

    containerSearch: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 25,
    },

    iconSearch: {
        alignSelf: 'center',
        paddingLeft: 10,
        top: 10
    },

    header: {
        backgroundColor: '#fafafa',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 5 },
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 80,
    },

    menu: {
        position: 'absolute',
        left: 20,
        alignSelf: "center",
        top: 20,
    },

    logo: {
        width: 175,
        height: 60,
        alignSelf: "center",
        marginTop: 5,
    },

    containerHeader: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    buttonWhatsapp: {
        width: 100,
        height: 42,
        backgroundColor: "green",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        left: -3,
        zIndex: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    buttonEdit: {
        width: 100,
        height: 42,
        backgroundColor: "#c1c1c1",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        left: 3,
        borderRadius: 10,
        zIndex: 9,
    },


    containerFloat: {
        bottom: 20,
        right: 20,
        position: 'absolute',
        backgroundColor: 'green',
        borderRadius: 10,
        zIndex: 9,
        width: 50,
        height: 50,
        justifyContent: "center",
    },

    CartButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    containerButtons: {
        backgroundColor: '#121212',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 15,
        padding: 15,
        paddingBottom: 20,
    },
    btnSearchProfile: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B292F',
        width: 40,
        height: 40,
        borderRadius: 50,
        padding: 10,
    },
    btnImage: {
        width: 40,
        resizeMode: 'contain',
    },
    containerMain: {
        flex: 1,
        height: 100,
        backgroundColor: '#fff',
    },


    centralizarModal: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.37)'
    },

    removeItem: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginRight: 10,
        marginTop: 15,
    },

    CardContainerModal: {
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        paddingHorizontal: 15,
        marginHorizontal: 15,
        paddingBottom: 15,
        height: 500,
        borderRadius: 20,
    },

    ImagemModal: {

        width: 300,
        height: 300,

    },


    Cliente: {
        fontFamily: fonts.text,
        fontSize: 20,
        fontWeight:'900',
        marginBottom: 12,
        alignSelf:'center'
    },

    Valor: {
        fontFamily: fonts.text,
        fontSize: 15,
        marginBottom: 5,
        color: '#3d3d3d',
    },


    ValorRes: {
        fontFamily: fonts.text,
        fontSize: 13,
        color: '#ff3333',
        marginBottom: 5,
    },

    Section: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 5,
    },

    Entrada: {
        fontFamily: fonts.text,
        fontSize: 14,
        marginLeft: 20,
        color: 'gray',
    },

    Vencimento: {
        fontFamily: fonts.text,
        fontSize: 14,
        position: 'absolute',
        right: 0,
        color: 'gray',
    },

    Vencimento2: {
        position: 'absolute',
        right: 0,
        height: 35,
        width: 35,
        top: -50,
    },


    Footer: {
        alignItems: "center",
        justifyContent: "center",
        borderTopWidth: 0.5,
        borderTopColor: '#c1c1c1',
        padding: 7,
        marginTop: 12,
        width: '95%',
        alignSelf: "center",
    },

    FooterText: {
        fontFamily: fonts.text,
        fontSize: 16,
    },

    Icon: {
        position: 'absolute',
        left: -5,
    },

    viewImg: {

        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },

    textoAbrir: {
        fontFamily: fonts.text,
        fontSize: 13,
        color: 'gray',
    },

    TextInput: {
        borderWidth: 0.5,
        borderColor: '#000',
        width: '100%',
        borderRadius: 5,
        padding: 10,
        marginBottom: 5,
        justifyContent: "center",
        marginHorizontal: 5,
        alignSelf: "center",
        backgroundColor: '#fff',
        height: 45,
    },

    TitleInputs: {
        fontFamily: fonts.text,
        fontSize: 18,
        color: "#000",
        marginLeft: 35,
        marginTop: 15,
    },

    Button: {
        backgroundColor: '#328fad',
        width: '60%',
        alignSelf: "center",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
    },

    ButtonText: {
        fontSize: 20,
        color: '#fff',
        fontFamily: fonts.text,
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
})