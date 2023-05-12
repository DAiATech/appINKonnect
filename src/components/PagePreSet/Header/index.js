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

                <Image style={styles.profilePicture} source={require('../../../assets/images/profilePicture.png')} />

                <Image style={styles.logo} source={require('../../../assets/logo_2.png')} />


            </View>
        </View>
    );
};

export default Header;