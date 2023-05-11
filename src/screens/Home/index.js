import React, { useEffect, useState } from 'react';
import { styles } from './style';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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

export default function Home() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [usu, setUsu] = useState('');


    async function listarDados() {

        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`pam3etim/bd/dashboard/listar-cards.php?user=${user}`);
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

                    <Image style={styles.profilePicture} source={require('../../assets/images/profilePicture.png')} />
                </View>
            </View>

            {/* Caso queira colocar o feed sem repetir, apagaga a <SearchBar /> e descomenta a ScrollView 
        */}
            <SearchBar />

            <ScrollView style={styles.feedContainer}>
                {
                    POSTS.map((post, index) => (
                        <Post post={post} key={index} />
                    ))
                }
            </ScrollView>

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