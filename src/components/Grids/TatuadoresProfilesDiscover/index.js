import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Image, TextInput, Modal, Alert, Linking, Text, TouchableOpacity, View, ScrollView, Dimensions, FlatList } from 'react-native';
import SwipeableRow from '../../Linhas/Usuarios';
import api from '../../../services/api';
import url from '../../../services/url';
import { styles } from './styles';
import { Divider } from '@rneui/base'

import AsyncStorage from "@react-native-async-storage/async-storage";
import Grid from '../TatuadoresPostagensDiscover';
import { showMessage, hideMessage } from "react-native-flash-message";
import { EvilIcons, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
/* import * as ImagePicker from 'expo-image-picker';
 */
const DadosProps = {
    data: {
        id: string,
        nome: string,
        especialidade: string,
        profileImgId: string,
        imgRandomName: string,
    }
}


CardUsuarios = ({ data } = DadosProps) => {


    const [lista, setLista] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [busca, setBusca] = useState("");
    const [onEndReachedCalledDuringMomentum, setMT] = useState(true);


    async function loadData() {
        try {
            const response = await api.get(`InKonnectPHP/bd/tatuadores/postagensTatuador.php?ab=${data.id}`);

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
        console.log(data.id);
        return (
            <Grid
                data={item}
            />
        )
    }

    function Footer() {
        if (!load) return null;

        return (
            <View style={styles.loading}>
                <ActivityIndicator size={25} color="#000" />
            </View>
        )
    }

    async function Search() {
    const response = await api.get(`InKonnectPHP/bd/usuarios/buscar.php?buscar=${busca}`)   ;
        setLista(response.data.resultado);
    }

    useEffect(() => {
        loadData();
    }, [page, totalItems, lista]);

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

                <View style={{ marginBottom: 20, paddingBottom: 20, borderBottomWidth: 2, borderBottomColor: '#413B33' }}>
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
                                uri: url + "/InKonnectPHP/BD/tatuadores/imgsTatuadores" + "/" + data.imgRandomName
                            }} />
                        </View>
                        <View style={{
                            flexDirection: 'row', width: '100%', marginTop: 3
                        }}>
                            <Text style={{ color: '#fff', fontSize: 15, fontWeight: '600' }}>{data.nome}</Text>
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
                    {/* <View style={styles.postImageContainer}>
                        <Image style={styles.postImageImg} source={{ uri: 'https://i.pinimg.com/236x/93/72/36/937236177965925c5a7acdd086afed11.jpg' }} />
                    </View>
                    <View style={styles.postCaptionContainer}>
                        <Text style={styles.captionText}>
                            <Text style={styles.captionUserText} >
                                {data.nome}:...
                            </Text>
                            {data.profileImgId}
                        </Text>
                    </View>
                    <Divider style={{ marginTop: 30 }} width={1} orientation='vertical' /> */}
                    <View style={{ backgroundColor: '#121212', flex: 1, }}>
                        <FlatList
                            horizontal={true}
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
                            <Text style={styles.Entrada}>Especialidade: {data.especialidade}</Text>
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