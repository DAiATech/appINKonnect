import React, { useEffect, useState, useContext } from 'react';
import { styles } from './style';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import url from '../../services/url';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

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
import { getUserData } from '../../components/userData';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { useIsFocused } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();


    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    /*   async function setarDados() {
          const valorNome = await AsyncStorage.getItem('@nome');
          setNome(valorNome);
  
          const nomeUrl = await AsyncStorage.getItem('@email');
          setEmail(nomeUrl.substring(1, nomeUrl.length - 1));
  
          const valorImg = await AsyncStorage.getItem('@imgProfileNome');
          setImgProfile(JSON.parse(valorImg));
  
          console.log({ imgProfile })
      }
      setarDados(); */

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

    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData();
            setUserData(data);
        };
        fetchUserData();
    }, []);

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
                        uri: url + "/tccBackupTeste/BD/tatuadores/imgsTatuadores" + "/" + userData?.imagem
                    }} />
                </View>
            </View>
            <View style={{ height: 100, }}>
                <Text style={{ color: '#f0f', fontSize: 20, }}>Email {userData?.email}</Text>
                <Text style={{ color: '#f0f', fontSize: 20, }}>Nome {userData?.name}</Text>
                <Text style={{ color: '#f0f', fontSize: 20, }}>Imagem{userData?.imagem}Teste</Text>

            </View>
            <TouchableOpacity style={styles.btnCreatePost}
            onPress={() => navigation.push("CriacaoPost")}
            >
                <Ionicons name="add" size={35} color="#C6AC8F"  />
            </TouchableOpacity>
            {/* Caso queira colocar o feed sem repetir, apagaga a <SearchBar /> e descomenta a ScrollView */}
            <SearchBar />

            {/* <ScrollView style={styles.feedContainer}>
                {
                    POSTS.map((post, index) => (
                        <Post post={post} key={index} />
                    ))
                }
            </ScrollView> */}

            <View style={styles.containerBox}>
            </View>
        </SafeAreaProvider>

        /* <View style={{ flex: 1, backgroundColor: "#121212" }}>
                <View style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <View style={styles.containerHeader}>
                            <TouchableOpacity
                                style={styles.menu}
                                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                            >
                                <MaterialIcons name="menu" size={35} color="#EAE0D5" />
                            </TouchableOpacity>
    
                            <Image style={styles.logo} source={require('../../assets/logo_2.png')} />
    
                            <Image style={styles.profilePicture} source={require('../../assets/images/profilePicture.png')} />
                        </View>
                    </View>
    
    
                    <ScrollView
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >
    
                        <View style={styles.circleProgressView}>
                            <View style={styles.textProgressContainer}>
                                <Text style={styles.textProgressTitle}>Tarefas de Hoje</Text>
                                <Text style={styles.textProgress}>1 concluída</Text>
                            </View>
    
                            <AnimatedCircularProgress
                                size={80}
                                width={8}
                                fill={50}
                                tintColor="#00e0ff"
                                backgroundColor="#e0e0e0"
                                lineCap={"round"}
                            >
                                {
                                    (fill) => (
                                        <Text style={styles.numberInside}>50%</Text>
                                    )
                                }
                            </AnimatedCircularProgress>
                        </View>
    
    
                        <View style={styles.containerBox}>
    
                            <TouchableOpacity onPress={() => navigation.navigate("Usuario")}>
                                <View>
                                    <View style={styles.box}>
                                        <MaterialIcons style={styles.iconRegistered} name="lock-clock" size={70} color="#b82d" />
                                        <View style={styles.textos}>
                                            <Text style={styles.rText}>Total de usuários</Text>
                                            <Text style={styles.lenghtText}>{dados.total_usuarios}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.textFooter}>Usuários Cadastrados</Text>
                                </View>
                            </TouchableOpacity>
    
                        </View>
    
    
                    </ScrollView>
    
                </View>
            </View> */
    );
};