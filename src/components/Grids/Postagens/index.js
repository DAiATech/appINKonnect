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
                <Text style={{ color: '#595858', fontSize: 14, marginTop: 10, alignContent: "center", textAlign: "center" }}>Nenhum Registro Encontrado!</Text>
                :

                <View style={{ marginBottom: 20, paddingBottom: 10, borderBottomWidth: 2, borderBottomColor: '#413B33' }}>
                    {/*  <SwipeableRow
                        style={{}}
                        onPressWhatsapp={async () => {
                            await Linking.openURL(`http://api.whatsapp.com/send?1=pt_BR&phone=55${data.nome}`)
                        }}

                        onPressEdit={async () => {
                            navigation.push('NovoUsuario', { id_reg: data.id });
                        }}

                        onPressDelete={async () => {
                            excluir(data.nome, data.id);
                        }}


                    > */}
                    {/*   <TouchableOpacity
                            style={styles.box}
                            onPress={() => setAbrirModal(true)}
                        > */}
                    <View style={styles.header}>
                        <View style={{ width: 65, }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 25, }} source={{
                                uri: url + "/tccBackupTeste/BD/tatuadores/imgsTatuadores" + "/" + data.profileImgRandomName
                            }} />
                        </View>
                        <View style={{
                            flexDirection: 'row', width: '100%', marginTop: 13, marginLeft: -7,
                        }}>
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>{data.nome}</Text>
                            <View style={styles.containerButtonFollow}>
                                <TouchableOpacity
                                    style={styles.buttonFollow}
                                    /* onPress={'...'} */
                                >
                                    <Ionicons name="add-outline" size={20} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>                    
                    {/* <ScrollView overScrollMode='always' horizontal={true}
                        style={styles.postImagesContainer}>
                        <View style={{ gap: 20, flexDirection: 'row', }}>
                            <View style={styles.containerImg}>
                                <Image style={styles.postImageImg} source={{ uri: 'https://i.pinimg.com/236x/93/72/36/937236177965925c5a7acdd086afed11.jpg' }} />
                            </View>
                            <View style={styles.containerImg}>
                                <Image style={styles.postImageImg} source={{ uri: 'https://i.pinimg.com/236x/93/72/36/937236177965925c5a7acdd086afed11.jpg' }} />
                            </View>
                            <View style={styles.containerImg}>
                                <Image style={styles.postImageImg} source={{ uri: 'https://i.pinimg.com/236x/93/72/36/937236177965925c5a7acdd086afed11.jpg' }} />
                            </View>
                        </View>
                    </ScrollView> */}
                    {/*  </TouchableOpacity>/*/}
                    {/* </SwipeableRow> */}
                    <View style={styles.postImageContainer}>
                        <Image style={styles.postImageImg} source={{
                            uri: url + "/tccBackupTeste/BD/tatuadores/imgsPostagens" + "/" + data.postagemImgRandomName
                        }} />
                    </View>
                    <View style={styles.postCaptionContainer}>
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
                    </View>
                    {/*                     <Divider style={{ marginTop: 30 }} width={1} orientation='vertical' />
 */}
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

export default CardPostagens;