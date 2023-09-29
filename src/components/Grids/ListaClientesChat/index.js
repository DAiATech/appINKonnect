import React, { useEffect, useState } from 'react';
import { Image, TextInput, Modal, FlatList, Alert, Linking, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import SwipeableRow from '../../Linhas/Usuarios';
import api from '../../../services/api';
import url from '../../../services/url';
import { styles } from './styles';
import { Divider } from '@rneui/base'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage, hideMessage } from "react-native-flash-message";
import { getUserData } from '../../userData';
import { EvilIcons, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
const DadosProps = {
    data: {
        id: string,
        nome: string,
        imgName: string,
        
    }
}

ListaClientesChat = ({ data } = DadosProps) => {

    const navigation = any = useNavigation();
    const [abrirModal, setAbrirModal] = useState(false);

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
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData();
            setUserData(data);
        };
        fetchUserData();
    }, []);
    return (
        <>
            {data.id === undefined && data.nome === undefined ?
                <Text style={{ color: '#595858', fontSize: 15, marginTop: 10, alignContent: "center", textAlign: "center" }}>Nenhum Tatuador na lista de chat!</Text>
                :
                <View style={{ marginBottom: 20, paddingBottom: 10, borderBottomWidth: 2, borderBottomColor: '#413B33' }}>
                    <View style={styles.header}>
                        <View style={{ width: 65, }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 25, }} source={{
                                uri: url + "/InKonnectPHP/BD/usuarios/imgsUsuarios" + "/" + data.imgName
                            }} />
                        </View>
                        <View style={{
                            flexDirection: 'row', width: '100%', marginTop: 13, marginLeft: -7,
                        }}>
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>{data.nome}</Text>
                            <View style={{ marginLeft: 20 }}>
                                <TouchableOpacity
                                    style={styles.buttonFollow}
                                    onPress={() => navigation.navigate('ChatScreenTatuador',
                                        {
                                            id: data.id,
                                            userName: userData?.nome,
                                            userImg: userData?.imagem,
                                            profileImagemCliente: data.imgName,
                                            clienteNome: data.nome,
                                        })
                                    }
                                >
                                    <Ionicons name="chatbox" size={20} color="#fff" />
                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>

                    {/*    <View style={styles.postCaptionContainer}>
                        <Text style={styles.captionText}>
                            <Text style={styles.captionUserText} >
                                {data.nome}:
                            </Text>
                            <Text>
                                {'  '}
                            </Text>
                            <Text style={styles.captionUserDescricao}>
                                {data.descricao}
                            </Text>
                        </Text>
                    </View> */}
                </View >
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
export default ListaClientesChat;