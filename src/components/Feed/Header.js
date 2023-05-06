import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';



const Header = () => {
    return (
        <View style={styles.header}>
        <View style={styles.containerHeader}>

            <TouchableOpacity
                style={styles.menu}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
                <MaterialIcons name="menu" size={35} color="black" />
            </TouchableOpacity>

            <Image style={styles.logo} source={require('../../assets/logo_2.png')} />

        </View>
    </View>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        padding: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        color: '#fff',
        padding: 20,

    },
    logoText: {
        width: 100,
        height: 60,
        resizeMode: 'contain',
    }, icone: {
        marginLeft: 10,
    },
    unreadBadget: {
        position: 'absolute',
        backgroundColor: '#ff3508',
        right: -5,
        top: -5,
        borderRadius: 25,
        width: 25,
        height: 18,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    unreadBadgetText: {
        color: '#fff',
        fontWeight: '600',
    },  
    header:{
        
        backgroundColor: '#121212',
        shadowOpacity: 0.1,
        elevation: 6,
        shadowOffset : { width: 1, height: 5},
        borderBottomRightRadius: 0,
        borderBottomWidth:5,
        borderBottomColor:"#413B33",
        height: 55,
    },

    menu:{
        position: 'absolute',
        left: 20,   
        alignSelf: "center",
        top: 10,
    },

    logo:{
        width: 130,
        height: 30,
        alignSelf: "center",
/*         marginTop: 10,
        marginBottom: 10, */
        margin: 10
    },

});

export default Header;