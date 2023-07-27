import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { ScrollView, ActivityIndicator, FlatList, Text, Image, TextInput, TouchableOpacity, View, Dimensions, Alert, Modal, Button, Platform, } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Header from "../../components/PagePreSet/Header";
import { Ionicons, EvilIcons, MaterialIcons, Octicons, SimpleLineIcons } from '@expo/vector-icons';
import api from '../../services/api';
import Grid from '../../components/Grids/Sessoes';
import { getUserData } from "../../components/userData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Calendar } from "react-native-calendars";
import url from "../../services/url";
export default function CalendarioTatuador() {

    const navigation = useNavigation();
    const [dataSelected, setDataSelected] = useState();
    const [dataSelectedTeste, setDataSelectedTeste] = useState('2023-07-19');
    const [cliente, setCliente] = useState('');
    const [horario, setHorario] = useState('');
    const [valor, setValor] = useState('');
    const [anotacoes, setAnotacoes] = useState();
    const [success, setSuccess] = useState(false);


    const [showPicker, setShowPicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handlePickerOpen = () => {
        setShowPicker(true);
    };



    const handlePickerClose = () => {
        setShowPicker(false);
    };


    const handleDateChange = (event, date) => {
        if (date !== undefined) {
            setSelectedDate(date);
            // Do something with the selected date
        }
        setShowPicker(false);
    };

    const [date, setDate] = useState(new Date);
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');

    const onChangeTime = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Hours:' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
        setHorario(tempDate.getHours() + ':' + tempDate.getMinutes() + ':00')
        setText(fDate + '\n' + fTime)

        console.log(fDate + '( ' + fTime + ' )')
        console.log(horario)
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }




    const [abrirModalHorario, setAbrirModalHorario] = useState(false);
    const [abrirModal, setAbrirModal] = useState(false);
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData();
            setUserData(data);
        };
        fetchUserData();
    }, []);


    const datasMarcadas = ['2023-07-27', '2023-07-20'];
    async function addDataMarcada(d) {
        const item = d;
        console.log(item);
        setDatasMarcadas([...datasMarcadas, item]);
    }

    async function cadastrarSessao() {
        if (cliente == "" || valor == "" || horario == "") {
            Alert({
                message: "Erro no cadastro",
                description: "Preencha todos os campos!",
                type: "warning",
            });
            return;
        } else {
            {
                var formData = new FormData();

                formData.append('tatuador', userData?.id);
                formData.append('cliente', cliente);
                formData.append('data', dataSelected);
                formData.append('horario', horario);
                formData.append('valor', valor);
                formData.append('anotacoes', anotacoes);


                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;
                console.log(formData);
                console.log("testeSessao");
                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        console.log(this.responseText);
                    }
                });
                xhr.open("POST", url + "/InKonnectPHP/bd/tatuadores/criarSessao.php");
                xhr.send(formData);
                setSuccess(true);
                console.log("Acho que deu!");
                setAbrirModal(!abrirModal);
                navigation.push("Home")
            }
        }
    }

    const [lista, setLista] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);

    async function loadData() {
        try {
            const user = await AsyncStorage.getItem('@user');
            console.log(user);

            const response = await api.get(`InKonnectPHP/bd/tatuadores/listarSessoes.php?pagina=${page}&limite=10&tatuador=${user}`);

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
    useEffect(() => {
        loadData();
    }, [page, totalItems, lista]);


    const getHeader = () => {

        return <>
            <Header />
            <View style={{ paddingBottom: 25, borderBottomWidth: 3, borderBottomColor: '#413B33', }}>
                <Calendar
                    style={{ borderRadius: 20, borderWidth: 1, height: 400, marginHorizontal: 25, marginTop: 15 }}
                    onDayPress={day => {
                        setDataSelected(day.dateString);
                        console.log(day.dateString);
                        setAbrirModal(true);
                    }}
                    markedDates={{
                        [dataSelected]: { marked: true, selectedDotColor: 'orange', selected: true },
                        [dataSelectedTeste]: { marked: true, selectedDotColor: 'orange', selected: true },
                        [datasMarcadas]: { marked: true, selectedDotColor: 'orange', selected: true },
                    }}
                    theme={{
                        calendarBackground: '#222',
                        dayTextColor: '#fff',
                        textDisabledColor: '#444',
                        monthTextColor: '#888'
                    }}
                />
            </View>
        </>
    };
    const getFooter = () => {
        return <Text>'Loading...'</Text>;
    };


    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#121212', paddingHorizontal: 15, flex: 1, }}>
                <View style={{ flex: 1, }}>
                    <FlatList
                        data={lista}
                        renderItem={renderItem}
                        ListHeaderComponent={getHeader}/* Usa isso para não precisar colocar flatlist dentro da scrollview */
                    />
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
                        <Text style={styles.ModalTitle}>Nova Sessão</Text>

                        <View style={styles.modalItemSection}>
                            <Image style={styles.imgProfilePicture} source={{
                                uri: url + "/InKonnectPHP/BD/tatuadores/imgsTatuadores" + "/" + userData?.imagem
                            }} />
                            <Text style={styles.textTatuadorName}>{userData?.nome} </Text>
                        </View>

                        <View style={styles.modalItemSection}>
                            <MaterialIcons style={styles.Icon} name="person-search" size={23} color="#000" />
                            <Text style={styles.textItem}>Cliente: </Text>
                            <TextInput
                                style={styles.InputText}
                                placeholder="..."
                                placeholderTextColor='#413B33'
                                value={cliente}
                                multiline={false}
                                onChangeText={(cliente) => setCliente(cliente)}
                            />
                        </View>

                        <View style={styles.modalItemSection}>
                            <MaterialIcons style={styles.Icon} name="calendar-today" size={23} color="#000" />
                            <Text style={styles.textItem}>Data: </Text>
                            <Text style={styles.textDataValue}>{dataSelected}</Text>
                        </View>

                        <View style={styles.modalItemSection}>
                            <MaterialIcons style={styles.Icon} name="lock-clock" size={23} color="#000" />
                            <Text style={styles.textItem}>Horário: </Text>
                            <TouchableOpacity
                                style={styles.btnHoras}
                                onPress={() => showMode('time')}>
                                <Text style={styles.textBtnHoras}>{date.getHours()} : {date.getMinutes()}</Text>

                            </TouchableOpacity>

                            {/* <TextInput
                                    style={styles.InputText}
                                    placeholder="..."
                                    placeholderTextColor='#413B33'
                                    value={horario}
                                    multiline={false}
                                    onChangeText={(horario) => setHorario(horario)}
                                /> */}
                        </View>

                        {show && (
                            <DateTimePicker
                                testeID='dateTimePicker'
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display='default'
                                onChange={onChangeTime}
                            />)}

                        <View style={styles.modalItemSection}>
                            <MaterialIcons style={styles.Icon} name="attach-money" size={23} color="#000" />
                            <Text style={styles.textItem}>Valor: </Text>
                            <TextInput
                                style={styles.InputText}
                                placeholder="R$200.50"
                                placeholderTextColor='#413B33'
                                value={valor}
                                multiline={false}
                                onChangeText={(valor) => setValor(valor)}
                            />
                        </View>
                        <View style={styles.modalItemSectionAnotacao} >
                            <SimpleLineIcons style={styles.Icon} name="note" size={23} color="#000" />
                            <Text style={styles.textItem}>Anotações: </Text>
                            <TextInput
                                style={styles.InputAnotacoes}
                                placeholder="Anotações..."
                                placeholderTextColor='#413B33'
                                value={anotacoes}
                                multiline={true}
                                onChangeText={(anotacoes) => setAnotacoes(anotacoes)}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.btnCadastrar}
                            onPress={cadastrarSessao}>
                            <Text style={styles.textBtnCadastrar}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View >
    )
}