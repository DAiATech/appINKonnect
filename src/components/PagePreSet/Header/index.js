import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import { styles } from './style';

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <View style={styles.containerHeader}>
                <TouchableOpacity
                    style={styles.menu}
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                >
                    <MaterialIcons name="menu" size={35} color="black" />
                </TouchableOpacity>

                    <Image style={styles.logo} source={require('../../../assets/logo_2.png')} />
                    
                    <Image style={styles.profilePicture} source={require('../../../assets/images/profilePicture.png')} />
            </View>
        </View>
    );
};

export default Header;