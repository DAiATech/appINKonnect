import React, { useEffect, useState, useContext } from 'react';
import { useNavigation, DrawerActions } from "@react-navigation/native";

import { styles } from './style';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import url from '../../services/url';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from '@react-native-picker/picker';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
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
    TextInput
} from 'react-native';
import Header from '../../components/PagePreSet/Header';
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { getUserData } from '../../components/userData';

export default function CriacaoPost() {
    const [postImg, setPostImg] = useState();
    const [descricao, setDescricao] = useState();

    const [estilo, setEstilo] = useState(
        ['PONTILHISMO', 'OLD SCHOOL', 'GEOMÉTRICO', 'MINIMALISTA', 'BLACKWORK', 'SINGLE LINE', 'GLITCH', 'TINTA BRANCA', 'TINTA VERMELHA', 'PRETO E BRANCO', 'AQUARELA', 'ORIENTAL', 'REALISTA', 'MAORI']
    );
    const [estiloSelecionado, setEstiloSelecionado] = useState([]);

    const [success, setSuccess] = useState(false);

    const navigation = useNavigation();

    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData();
            setUserData(data);
        };
        fetchUserData();
    }, []);


    async function imagePickerCall() {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            if (status !== "granted") {
                alert("Nós precisamos dessa permissão.");
                return;
            }
        }

        const data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All
        });

        if (data.canceled) {
            return;
        }

        if (!data.uri) {
            return;
        }

        setPostImg(data);
    }

    async function criarPostagem() {

        var formData = new FormData();

        /* dados dos inputs */
        formData.append('descricao', descricao);
        formData.append('estilo', estiloSelecionado);
        formData.append('tatuadorId', userData?.id);

        //Upload da Imagem        
        formData.append("photo", {
            name: postImg.uri,
            type: 'image/png',
            uri: postImg.uri
        }, "image.png");

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        console.log(formData);

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("POST", url + "/InKonnectPHP/bd/tatuadores/criarPostagem.php");
        xhr.send(formData);
        //-----FIM UPLOAD IMAGEM----


        setSuccess(true);
        console.log("Postagem Criada!!!!");
        navigation.push("Home")
    }




    return (
        <View style={styles.container}>
            <ScrollView>
                <Header />

                <View style={styles.main}>
                    <TouchableOpacity
                        style={styles.addImageContainer}
                        onPress={imagePickerCall}
                    >
                        <Ionicons name="add" size={35} color="#C6AC8F" />

                    </TouchableOpacity>
                    <View style={styles.imgContainer}>
                        <Image
                            source={{
                                uri: postImg
                                    ? postImg.uri
                                    : ""
                            }}
                            style={styles.avatar}
                        ></Image>
                    </View>
                    <View>


                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ marginBottom: 40 }}>
                                <TextInput
                                    style={styles.InputDescricao}
                                    placeholder="....."
                                    placeholderTextColor='#413B33'
                                    value={descricao}
                                    multiline={true}
                                    onChangeText={(descricao) => setDescricao(descricao)}
                                />
                            </View>
                            <View style={{ borderRadius: 25, overflow: 'hidden', height: 50, width: 200, }
                            }>
                                <Picker
                                    selectedValue={estiloSelecionado}
                                    style={styles.selectEspecialidade}
                                    onValueChange={(itemValue) =>
                                        setEstiloSelecionado(itemValue)
                                    }>
                                    {
                                        estilo.map(esp => {
                                            return <Picker.Item color='#C6AC8F' style={styles.pickerText} label={esp} value={esp} />
                                        })
                                    }
                                </Picker>
                            </View>
                            <TouchableOpacity
                                style={styles.btnConfirmar}
                                onPress={criarPostagem}>
                                <Text style={styles.btnText}>Postar</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </ScrollView >
        </View >
    );
};