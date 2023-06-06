import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import { styles } from './style';
import url from '../../../services/url';
import get

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
                <TouchableOpacity
                    style={styles.menu}
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                >
                    <MaterialIcons name="menu" size={35} color="#EAE0D5" />
                </TouchableOpacity>

                <Image style={styles.logo} source={require('../../../assets/logo_2.png')} />

                <Image style={styles.profilePicture} source={{
                    uri: url + "/tccBackupTeste/BD/tatuadores/imgsTatuadores" + "/" + userData?.imagem
                }} />
            </View>
        </View>
    );
};

export default Header;