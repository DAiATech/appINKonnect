import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Image, TextInput, Modal, FlatList, Alert, Linking, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import SwipeableRow from '../../Linhas/Usuarios';
import api from '../../../services/api';
import url from '../../../services/url';
import { styles } from './styles';
import { Divider } from '@rneui/base'

import AsyncStorage from "@react-native-async-storage/async-storage";

import { showMessage, hideMessage } from "react-native-flash-message";
import { EvilIcons, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
/* import * as ImagePicker from 'expo-image-picker';
 */
const DadosProps = {
    data: {
        id: string,
        nome: string,
        descricao: string,
        estilo: string,
        postagemImgRandomName: string,
        profileImgRandomName: string,
    }

}

CardPostagens = ({ data } = DadosProps) => {

    const [abrirModal, setAbrirModal] = useState(false);
    const navigation = any = useNavigation();


    async function excluir(nome, id) {

        Alert.alert('Sair', `Você tem certeza que deseja excluir o Registro : ` + nome, [
            {
                text: 'Não',
                style: 'cancel',
            },

            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        const response = await api.get(`apiModelo/usuarios/excluir.php?id=${id}`);

                        showMessage({
                            message: "Excluído Sucesso",
                            description: "Registro Excluído",
                            type: "info",
                            duration: 800,
                        });

                        navigation.push('Home');
                    } catch (error) {
                        Alert.alert('Não foi possivel excluir, tente novamente!')
                    }
                }
            }
        ])
    }

    return (
        <>
            {data.id === undefined && data.nome === undefined ?
                <Text style={{ color: '#595858', fontSize: 14, alignContent: "center", textAlign: "center", marginTop: 10, marginLeft: 10, }}>O Tatuador ainda não realizou postagens</Text>
                :

                <View style={{ width: 200, height: 280, marginLeft: 18, marginTop: 10, marginBottom: 10, }}>
                    <Image style={{ width: '100%', height: '100%', borderRadius: 15, }} source={{
                        uri: url + "/InKonnectPHP/BD/tatuadores/imgsPostagens" + "/" + data.postagemImgRandomName
                    }} />
                </View>
            }
            <Modal
                visible={abrirModal}
                animationType={'fade'}
                transparent={true}
                onRequestClose={() => {
                    setAbrirModal(!abrirModal)
                }}
            >
                <View style={styles.centralizarModal}>
                    <View style={styles.CardContainerModal}>
                        <TouchableOpacity
                            style={styles.removeItem}
                            onPress={() => setAbrirModal(false)}
                        >
                            <EvilIcons name="close" size={25} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.Cliente}>{data.nome}</Text>

                        <View style={styles.Section}>
                            <MaterialIcons style={styles.Icon} name="people-outline" size={22} color="#c1c1c1" />

                        </View>
                        <View style={styles.Section}>
                            <MaterialIcons style={styles.Icon} name="mail" size={22} color="#c1c1c1" />
                            <Text style={styles.Entrada}>Especialidade: {data.nome}</Text>
                        </View>
                        <TouchableOpacity onPress={() => Linking.openURL(url + 'painel/images/perfil/' + data.nome)}>
                            {(() => {
                                if (data.foto != 'sem-foto.jpg' && data.foto != '' && data.foto != null) {

                                    return (
                                        <View style={styles.viewImg}>
                                            <Image style={styles.ImagemModal} source={{ uri: (url + 'painel/images/perfil/' + data.foto) }} />
                                            <Text style={styles.textoAbrir}>(Clique para Abrir)</Text>
                                        </View>
                                    )
                                }
                            })()}
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>



        </>
    );
}

export default CardPostagens;