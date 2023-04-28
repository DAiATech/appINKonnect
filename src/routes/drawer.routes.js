import React from 'react';

import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/core';

import Home from '../screens/Home';
import CustomDrawer from '../components/CustomDrawer';

const DrawerRoutes = () => {
    
    const Drawer = createDrawerNavigator();

    return (
    <Drawer.Navigator 
        screenOptions={{
            headerShown:false,
            drawerStyle:{
            width: 250,
            height: '100%',
            justifyContent: 'center',
            backgroundColor: '#f2f2f2',
            zIndex: 11,
            
            }
        }}
        drawerContent={props => <CustomDrawer />}
    >
        <Drawer.Screen 
            name="Home"
            component={Home}
            
        />

    </Drawer.Navigator>
    )
}

export default DrawerRoutes;

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