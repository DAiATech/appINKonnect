import { StyleSheet } from "react-native";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
    itemContainer: {
        marginHorizontal: 25,
        padding: 5,
        paddingTop: 25,
        paddingBottom: 25,
        gap: 20,
        backgroundColor: '#1B292f',
        borderRadius: 20,

    },
    itemTitle: {
        color: '#FCF3EA',
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: "center",
        textShadowColor: '#000',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius:10,
    },
    itemClienteContainer: {
        flexDirection: 'row',
        gap: 10,
        marginLeft: 25,

    },
    itemClienteNameText: {
        color: '#FCF3EA',
        fontSize: 20,
        fontWeight: '800',
    },
    IconBackground: {
        backgroundColor: '#FCF3EA',
        padding: 5,
        borderRadius: 50,
        alignContent: 'center',
        alignItems: 'center'
    },
    itemDatasContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    itemSection: {

    },
    itemText: {
        color: '#FCF3EA',
        fontSize: 19,
        fontWeight: '600',
    },
    itemDataText: {
        color: '#FCF3EA',
        fontSize: 19,
        fontWeight: '300',
    },
})