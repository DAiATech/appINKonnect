import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { ScrollView, ActivityIndicator, FlatList, Image, Text, TextInput, TouchableOpacity, View, Dimensions, Alert } from 'react-native';
import Header from '../../components/Header';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import api from '../../services/api';
import Grid from '../../components/Grids/Postagens';
import url from "../../services/url";
import { getUserData } from "../../components/userData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerActions } from "@react-navigation/native";

export default function Home() {

    const navigation = useNavigation();

    const [lista, setLista] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [busca, setBusca] = useState("");
    const [onEndReachedCalledDuringMomentum, setMT] = useState(true);

    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData();
            setUserData(data);
        };
        fetchUserData();
    }, []);

    async function loadData() {
        try {
            const response = await api.get(`InKonnectPHP/bd/tatuadores/listarPostagens.php?pagina=${page}&limite=10`);

            if (lista.length >= response.data.totalItems) return;

            if (loading === true) return;

            setLoading(true);

            setLista([...lista, ...response.data.resultado]);
            setPage(page + 1);
        } catch (error) {
            console.log(error)
        }
    }

    const renderItem = function ({ item }) {
        return (
            <Grid
                data={item}
            />
        )
    }

   /*  function Footer() {
        if (!load) return null;

        return (
            <View style={styles.loading}>
                <ActivityIndicator size={25} color="#000" />
            </View>
        )
    } */

    async function Search() {
        const response = await api.get(`InKonnectPHP/bd/usuarios/buscar.php?buscar=${busca}`);
        setLista(response.data.resultado);
    }

    useEffect(() => {
        loadData();
    }, [page, totalItems, lista]);

    return (
        <View style={styles.container}>
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
            {/* <View style={{ height: 100, }}>
                <Text style={{ color: '#f0f', fontSize: 20, }}>Email {userData?.email}</Text>
                <Text style={{ color: '#f0f', fontSize: 20, }}>Nome {userData?.nome}</Text>
                <Text style={{ color: '#f0f', fontSize: 20, }}>Imagem{userData?.imagem}Teste</Text>
            </View> */}
            <TouchableOpacity style={styles.btnCreatePost}
                onPress={() => navigation.push("CriacaoPost")}
            >
                <Ionicons name="add" size={35} color="#C6AC8F" />
            </TouchableOpacity>

            <View style={{ backgroundColor: '#121212', paddingHorizontal: 15, flex: 1, }}>
                <View style={{ flex: 1, height: Dimensions.get('window').height + 30, }}>
                    <FlatList
                        data={lista}
                        renderItem={renderItem}
                    //   keyExtractor={item => String(item.id)}
                    //  onEndReachedThreshold={0.1}
                    //removeClippedSubviews
                    //  initialNumToRender={10}
                    // onEndReached={(distanceFromEnd) => {
                    //   if (!onEndReachedCalledDuringMomentum) {
                    //    loadData().then(() => setLoading(false));
                    //    setMT(true);
                    //   }
                    //    }}
                    // ListFooterComponent={(distanceFromEnd) => {
                    //  if (!onEndReachedCalledDuringMomentum) {
                    // return <Footer load={loading} />
                    //    } else {
                    //    return <View ></View>
                    //  }
                    // }}
                    //  onMomentumScrollBegin={() => setMT(false)}
                    //  windowSize={10}
                    // getItemLayout={(data, index) => (
                    //   { length: 50, offset: 50 * index, index }
                    // )}
                    />
                </View>

            </View>

        </View>
    )
}