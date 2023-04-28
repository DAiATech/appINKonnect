import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Image, TextInput, Modal, Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import SwipeableRow from '../../Linhas/Usuarios';
import api from '../../../services/api';
import url from '../../../services/url';
import { styles } from './styles';

import AsyncStorage from "@react-native-async-storage/async-storage";


import { showMessage, hideMessage } from "react-native-flash-message";
import { EvilIcons, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
/* import * as ImagePicker from 'expo-image-picker';
 */
const DadosProps = {
    data: {
        id: string,
        nome: string,
        telefone: string,
        endereco: string,
        especialidade: string,
    }
}


CardUsuarios = ({ data } = DadosProps) => {

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

                        navigation.push('Usuarios');
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

                <Text style={{ color: '#595858', fontSize: 14, marginTop: 10, alignContent: "center", textAlign: "center" }}>Nenhum Registro Encontrado!</Text>

                :

                <View>
                    <SwipeableRow
                        onPressWhatsapp={async () => {
                            await Linking.openURL(`http://api.whatsapp.com/send?1=pt_BR&phone=55${data.nome}`)
                        }}

                        onPressEdit={async () => {
                            navigation.push('NovoUsuario', { id_reg: data.id });
                        }}

                        onPressDelete={async () => {
                            excluir(data.nome, data.id);
                        }}


                    >
                        <TouchableOpacity
                            style={styles.box}
                            onPress={() => setAbrirModal(true)}
                        >
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: -5 }}>
                                <View style={{ width: 65 }}>
                                    <Image style={{ width: 50, height: 50, }} source={{ uri: (url + 'apiModelo/imagem.jpg') }} />
                                </View>
                                <View style={{ width: '100%', marginTop: 3 }}>
                                    <Text style={{ color: '#000', fontSize: 12 }}>{data.nome} - {data.id}</Text>
                                    <Text style={{ color: '#000', fontSize: 12 }}>{data.email} - Especialidade: {data.especialidade}</Text>
                                </View>
                            </View>


                        </TouchableOpacity>
                    </SwipeableRow>

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
                        <Text style={styles.Cliente}>{data.nome} - {data.nivel}</Text>


                        <View style={styles.Section}>
                            <MaterialIcons style={styles.Icon} name="people-outline" size={22} color="#c1c1c1" />

                        </View>



                        <View style={styles.Section}>
                            <MaterialIcons style={styles.Icon} name="mail" size={22} color="#c1c1c1" />
                            <Text style={styles.Entrada}>Especialidade: {data.especialidade}</Text>
                            <Text style={styles.Entrada}>Telefone: {data.telefone}</Text>
                        </View>


                        <TouchableOpacity onPress={() => Linking.openURL(url + 'painel/images/perfil/' + data.foto)}>
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

export default CardUsuarios;