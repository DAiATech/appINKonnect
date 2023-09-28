import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import { styles } from './style';
import url from '../../../services/url';
import { getUserData } from '../../userData';

const Header = () => {
    const navigation = useNavigation();
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData();
            setUserData(data);
        };
        fetchUserData();
    }, []);


    return (
        <View style={styles.header}>
            <View style={styles.containerHeader}>
                <Image style={styles.profilePicture} source={{
                    uri: url + "/InKonnectPHP/BD/tatuadores/imgsTatuadores" + "/" + userData?.imagem
                }} />
                <Image style={styles.logo} source={require('../../../assets/logo_2.png')} />

            </View>
        </View>
    );
};

export default Header;