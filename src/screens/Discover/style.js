import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    containerButtons: {
        backgroundColor: '#121212',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        gap:15,
        padding:10,
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
    btnImage:{
        width:40,
        resizeMode:'contain',
    },
    containerMain:{
        flex:1,
        height:100,
        backgroundColor:'#fff',
    },
        /* feedContainer:{
            marginLeft:-100,
        } */
});