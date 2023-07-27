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

} from 'react-native';
import config from '../../../config'
import { getUserData } from '../../components/userData';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


import { useIsFocused } from '@react-navigation/native';
import { KeyboardAvoidingView } from 'react-native';

export default function TatuadorProfile() {

    const navigation = useNavigation();

    const [nomeEstudio, setNomeEstudio] = useState();
    const [endereco, setEndereco] = useState(null);
    const [nomeEndereco, setNomeEndereco] = useState(null);
    const [success, setSuccess] = useState(false);

    const [showBtn, setShowBtn] = useState(false);



    const [abrirModal, setAbrirModal] = useState(false);


    /* Cadastrar etudio: */
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

    const [userData, setUserData] = useState(null);

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
    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData();
            if (userData == null) {
                setUserData(data);
            }
        };
        fetchUserData();
        checkPerfil();
    }, [userData]);


    return (
        <SafeAreaProvider style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.headerBackground}>
                    <TouchableOpacity
                        style={styles.menu}
                        onPress={() => navigation.push("Home")}
                    >
                        <Ionicons name="md-arrow-back-circle-outline" size={35} color="#000" style={styles.returnBtn} />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerFooter}>
                    <Image style={styles.profilePicture} source={{
                        uri: url + "/InKonnectPHP/BD/tatuadores/imgsTatuadores" + "/" + userData?.imagem
                    }} />
                    <View style={styles.headerContainerNameBtn}>
                        <Text style={styles.headerUserName}>
                            {userData?.nome}
                        </Text>
                        {/* Se o tatuador tiver um studio linkado esse botão não aparece: */}
                        {showBtn == true ?
                            <>
                                <TouchableOpacity
                                    style={styles.HeaderBtnEstudio}
                                    onPress={() => setAbrirModal(true)}
                                >
                                    <Text style={styles.HeaderBtnEstudioText}>Connectar Estúdio</Text>
                                </TouchableOpacity>
                            </>
                            : null}
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
                <View style={styles.userDataContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                        <FontAwesome name="map-marker" size={24} color="white" />
                        <Text style={styles.userDataText}>Cidade: Cajati</Text>
                    </View>
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
            </View>
        </SafeAreaProvider>
    );
};