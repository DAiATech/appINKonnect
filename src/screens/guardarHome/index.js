import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './styles';
import { ScrollView, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, Dimensions, Alert, Text, SafeAreaView, RefreshControl } from 'react-native';

import Header from '../../components/PagePreSet/Header';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import api from '../../services/api';
/* import Grid from '../../components/Grids/Usuarios'; */

import AsyncStorage from "@react-native-async-storage/async-storage";


import { getUserData } from '../../components/userData';
import { DrawerActions } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { SafeAreaProvider } from "react-native-safe-area-context";
import url from '../../services/url';
import SearchBar from '../../components/Feed/SearchBar';
import Post from '../../components/Feed/Post';
import { POSTS } from '../../assets/data/posts';

import Load from '../../components/Load';

import { useIsFocused } from '@react-navigation/native';


export default function Home() {

    const navigation = useNavigation();
    
    const [lista, setLista] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [busca, setBusca] = useState("");
    const [onEndReachedCalledDuringMomentum, setMT] = useState(true);
    const isFocused = useIsFocused();

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



    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData();
            setUserData(data);
        };
        fetchUserData();
    }, []);


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
                        uri: url + "/InKonnectPHP/BD/tatuadores/imgsTatuadores" + "/" + userData?.imagem
                    }} />
                </View>
            </View>

            <View style={{ height: 100, }}>
                <Text style={{ color: '#f0f', fontSize: 20, }}>Email {userData?.email}</Text>
                <Text style={{ color: '#f0f', fontSize: 20, }}>Nome {userData?.nome}</Text>
                <Text style={{ color: '#f0f', fontSize: 20, }}>Imagem{userData?.imagem}Teste</Text>
            </View>

            <TouchableOpacity style={styles.btnCreatePost}
                onPress={() => navigation.push("CriacaoPost")}
            >
                <Ionicons name="add" size={35} color="#C6AC8F" />
            </TouchableOpacity>

            {/* Caso queira colocar o feed sem repetir, apagaga a <SearchBar /> e descomenta a ScrollView */}
            {/* <SearchBar /> */}





            {/* <ScrollView style={styles.feedContainer}>
                {
                    POSTS.map((post, index) => (
                        <Post post={post} key={index} />
                    ))
                }
            </ScrollView> */}

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