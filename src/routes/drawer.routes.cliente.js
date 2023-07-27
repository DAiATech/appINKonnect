import React from 'react';

import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/core';

import Home from '../screens/Home';
import Feed from '../screens/Feed';
import CustomDrawerCliente from '../components/CustomDrawerCliente';
import CriacaoPost from '../screens/CriacaoPost';
import UserProfile from '../screens/TatuadorProfile';
import Usuario from '../screens/Usuario';
import HomeCliente from '../screens/HomeCliente';

const DrawerRoutesCliente = () => {
    
    const Drawer = createDrawerNavigator();

    return (
    <Drawer.Navigator 
    drawerContent={() => <CustomDrawerCliente />}
        screenOptions={{
            headerShown:false,
            drawerPosition: 'left',
            drawerStyle:{
            width: 300,
            height: '100%',
            backgroundColor: '#f2f2f2',
            zIndex: 11,        
            }
        }}
    >
        <Drawer.Screen 
            name="HomeCliente"
            component={HomeCliente}            
        />               
        
    </Drawer.Navigator>
    )
}

export default DrawerRoutesCliente;

const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#CFCFCF',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

    logout:{
        paddingTop: '190%',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    }
})