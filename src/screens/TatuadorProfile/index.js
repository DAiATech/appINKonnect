import React, { useEffect, useState, useContext } from 'react';
import { styles } from './style';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import url from '../../services/url';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome, Entypo, EvilIcons, FontAwesome5 } from '@expo/vector-icons';
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
    Modal,
    TextInput,
    FlatList,
    Dimensions,
    ImageBackground,

} from 'react-native';
import config from '../../../config'
import { getUserData } from '../../components/userData';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useIsFocused } from '@react-navigation/native';
import { KeyboardAvoidingView } from 'react-native';
import Grid from '../../components/Grids/Postagens';

export default function TatuadorProfile() {

    const navigation = useNavigation();
    const [userData, setUserData] = useState(null);

    /* const show Components */
    const [showBtn, setShowBtn] = useState(false);
    const [abrirModal, setAbrirModal] = useState(false);

    /* Cadastrar estudio: */
    const [nomeEstudio, setNomeEstudio] = useState();
    const [endereco, setEndereco] = useState(null);
    const [nomeEndereco, setNomeEndereco] = useState(null);
    const [success, setSuccess] = useState(false);
    async function cadastrarEstudio() {
        if (nome = "") {
            Alert({
                message: "Erro no cadastro",
                description: "Preencha todos os campos!",
                type: "warning",
            });
            return;
        } else {
            {

                console.log(endereco.latitude);
                console.log(endereco.longitude);
                console.log('aa');
                console.log(nomeEndereco);

                var formData = new FormData();

                formData.append('tatuadoriD', userData?.id);
                formData.append('nomeEstudio', nomeEstudio);
                formData.append('nomeEndereco', nomeEndereco);
                formData.append('enderecoLat', endereco.latitude);
                formData.append('enderecoLong', endereco.longitude);


                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;
                console.log(formData);
                console.log("testeSessao");
                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        console.log(this.responseText);
                    }
                });
                xhr.open("POST", url + "/InKonnectPHP/bd/tatuadores/cadastrarEstudio.php");
                xhr.send(formData);
                setSuccess(true);
                setShowBtn(false)
                console.log("Acho que deu!");
                setAbrirModal(!abrirModal);
            }
        }
    }

    /* Checar existencia de estudio */
    async function checkPerfil() {
        if (userData?.estudio == null) {
            console.log('Perfil não conectou a um estudio');
            console.log('o estudio é ' + (userData?.estudio));
            setShowBtn(true)
        }
        else {
            console.log('O perfil já conectou-se a um estúdio ' + (userData?.estudio));
            setShowBtn(false)
        }
    }

    /* Load Tatuador Posts */
    const [lista, setLista] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    async function loadData() {
        try {
            const user = await AsyncStorage.getItem('@user');

            const response = await api.get(`InKonnectPHP/bd/tatuadores/postagensTatuador.php?ab=${userData.id}`);

            if (lista.length >= response.data.totalItems) return;

            if (loading === true) return;

            setLoading(true);

            setLista([...lista, ...response.data.resultado]);
            setPage(page + 1);
        } catch (error) {
            console.log(error)
        }
    }
    /* Header (user Info) */
    const getHeader = () => {
        return <View style={styles.userDataContainer}>            
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                <Entypo name="drop" size={24} color="white" style={{ marginLeft: -5, }} />
                <Text style={styles.userDataText}>Nome: {userData?.nome}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                <AntDesign name="hearto" size={25} color="white" style={{ marginLeft: -5, }} />
                <Text style={styles.userDataText}>Especialidade: {userData?.especialidade}</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                <MaterialCommunityIcons name="cake" size={24} color="white" style={{ marginLeft: -5, }} />
                <Text style={styles.userDataText}>Nasceu: {userData?.dataNascimento} </Text>
            </View>
        </View>
    };

    /* Grid - User posts */
    const renderItem = function ({ item }) {
        return (
            <Grid
                data={item}
            />
        )
    }

    /* useEffect */
    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData();
            if (userData == null) {
                setUserData(data);
            }
        };
        fetchUserData();
        checkPerfil();
        loadData();
        console.log(userData?.imagem)
    }, [userData, lista]);

    

    return (
        <SafeAreaProvider style={styles.container}>
            <View style={styles.containerHeader}>
                <ImageBackground source={require('../../assets/images/wallpaperProfileImage.png')} style={styles.imageBackground}>            
                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => navigation.push("Home")}
                        >
                            <Ionicons name="md-arrow-back-circle-outline" size={35} color="#C6AC8F" style={styles.returnBtn} />
                        </TouchableOpacity>
                </ImageBackground>
                <View style={styles.headerFooter}>
                    <Image style={styles.profilePicture} source={{
                        uri: url + "/InKonnectPHP/BD/tatuadores/imgsTatuadores" + "/" + userData?.imagem
                    }} />
                    <View style={styles.headerContainerNameBtn}>
                        <Text style={styles.headerUserName}>
                            {userData?.nome}
                        </Text>
                        {/* Se o tatuador tiver um studio linkado esse botão não aparece: */}
                    </View>
                </View>                
            </View>
            <Modal
                visible={abrirModal}
                animationType={'fade'}
                transparent={true}
                onRequestClose={() => {
                    setAbrirModal(!abrirModal)
                }}
            >
                <View style={styles.modalCentralizar}>
                    <View style={styles.modalCard}>
                        <TouchableOpacity
                            style={styles.btnModalClose}
                            onPress={() => setAbrirModal(false)}
                        >
                            <EvilIcons name="close" size={25} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.ModalTitle}>Conectar-se ao Estúdio</Text>
                        <View style={styles.modalItemSection}>
                            <FontAwesome5 style={styles.Icon} name="store" size={23} color="#000" />
                            <Text style={styles.textItem}>Nome do Estúdio: </Text>
                            <TextInput
                                style={styles.InputText}
                                placeholder="Nome..."
                                placeholderTextColor='#413B33'
                                value={nomeEstudio}
                                multiline={false}
                                onChangeText={(nomeEstudio) => setNomeEstudio(nomeEstudio)}
                            />
                        </View>
                        <View style={styles.modalItemSectionSearch}>
                            <MaterialCommunityIcons style={styles.Icon} name="map" size={25} color="#000" />
                            <Text style={styles.textItem}>Endereço: </Text>
                            <View
                                style={styles.search}

                            >
                                <GooglePlacesAutocomplete
                                    placeholder='Para onde vamos?'
                                    onPress={(data, details = null) => {
                                        setEndereco({
                                            latitude: details.geometry.location.lat,
                                            longitude: details.geometry.location.lng,
                                            latitudeDelta: 0.0992,
                                            longitudeDelta: 0.093346
                                        });
                                        setNomeEndereco(details.formatted_address);
                                    }}
                                    query={{
                                        key: config.googleApi,
                                        language: 'pt-br'
                                    }}
                                    enablePoweredByContainer={false}
                                    fetchDetails={true}
                                    styles={{ listView: { height: 100 }, }}
                                >
                                </GooglePlacesAutocomplete>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.btnCadastrar}
                            onPress={cadastrarEstudio}>
                            <Text style={styles.textBtnCadastrar}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.mainConatiner}>
                    {showBtn == true ?
                        <>
                            <TouchableOpacity
                                style={styles.HeaderBtnEstudio}
                                onPress={() => setAbrirModal(true)}
                            >
                                <Text style={styles.HeaderBtnEstudioText}>Conectar Estúdio</Text>
                            </TouchableOpacity>
                        </>
                        : null}
                <View style={styles.userDataContainer}>                   
                    <View style={styles.containerLineItem}>
                        <Entypo name="drop" size={25} color="white" style={{ marginLeft: -5, }} />
                        <Text style={styles.userDataText}>Nome: {userData?.nome}</Text>
                    </View>
                    <View style={styles.containerLineItem}>
                        <AntDesign name="hearto" size={25} color="white" style={{ marginLeft: -5, }} />
                        <Text style={styles.userDataText}>Especialidade: {userData?.especialidade}</Text>
                    </View>

                    <View style={styles.containerLineItem}>
                        <MaterialCommunityIcons name="cake" size={25} color="white" style={{ marginLeft: -5, }} />
                        <Text style={styles.userDataText}>Nasceu: {userData?.dataNascimento} </Text>
                    </View>
                </View>
            </View>
        </SafeAreaProvider>
    );
};