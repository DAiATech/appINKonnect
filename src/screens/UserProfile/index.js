import React, { useEffect, useState, useContext } from 'react';
import { styles } from './style';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import url from '../../services/url';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from '../../components/PagePreSet/Header';
import SearchBar from '../../components/Feed/SearchBar';
import Post from '../../components/Feed/Post';
import { POSTS } from '../../assets/data/posts';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    RefreshControl,
    StatusBar,
    Alert,

} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { useIsFocused } from '@react-navigation/native';

export default function UserProfile() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();


    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [imgProfile, setImgProfile] = useState(null);

    async function setarDados() {
        const valorNome = await AsyncStorage.getItem('@nome');
        setNome(valorNome);

        const nomeUrl = await AsyncStorage.getItem('@email');
        setEmail(nomeUrl.substring(1, nomeUrl.length - 1));

        const valorImg = await AsyncStorage.getItem('@imgProfileNome');
        setImgProfile(JSON.parse(valorImg));

        console.log({ imgProfile })
    }
    setarDados();

    async function listarDados() {
        try {
            const user = await AsyncStorage.getItem('@user');
            /* const res = await api.get(`tccBackupTeste/bd/dashboard/listar-cards.php?user=${user}`); */
            const res = await api.get(`tccBackupTeste/bd/listarDadosUserLogado.php?user=${user}`);
            setDados(res.data);

        } catch (error) {
            console.log("Erro ao Listar " + error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);
        }
    }

    useEffect(() => {
        listarDados();
    }, [isFocused]);

    const onRefresh = () => {
        setRefreshing(true);
        listarDados();
    };
    return (
        <SafeAreaProvider style={styles.container}>

            {/* Tutorial para FEED DE POSTS do instagram: https://www.youtube.com/watch?v=pQmixUIdLN4*/}
            <View style={styles.header}>
                <View style={styles.containerHeader}>
                    <TouchableOpacity
                        style={styles.menu}
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    >
                        <MaterialIcons name="menu" size={35} color="#EAE0D5" />
                    </TouchableOpacity>

                    <Image style={styles.logo} source={require('../../assets/logo_2.png')} />

                    <Image style={styles.profilePicture} source={{
                        uri: url + "/tccBackupTeste/BD/tatuadores/imgsTatuadores" + "/" + imgProfile
                    }} />
                </View>
            </View>
            <View style={{ height: 100, }}>
                <Text style={{ color: '#f0f', fontSize: 20, }}>Email {email}</Text>
                <Text style={{ color: '#f0f', fontSize: 20, }}>Nome {nome}</Text>
                <Text style={{ color: '#f0f', fontSize: 20, }}>Imagem{imgProfile}Teste</Text>

            </View>                         
        </SafeAreaProvider>
    );
};