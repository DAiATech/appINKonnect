import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { ScrollView, ActivityIndicator, FlatList, Text, Image, TextInput, TouchableOpacity, View, Dimensions, Alert, Modal, Button, Platform, } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Header from "../../components/PagePreSet/Header";
import { Ionicons, EvilIcons, MaterialIcons, Octicons, SimpleLineIcons } from '@expo/vector-icons';
import api from '../../services/api';
import Grid from '../../components/Grids/TatuadoresProfiles';
import { getUserData } from "../../components/userData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Calendar } from "react-native-calendars";
import url from "../../services/url";
export default function CalendarioTatuador() {

    const navigation = useNavigation();
    const [dataSelected, setDataSelected] = useState('');
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
                xhr.open("POST", url + "/tccBackupTeste/bd/tatuadores/criarSessao.php");
                xhr.send(formData);
                setSuccess(true);
                console.log("Acho que deu!");
                setAbrirModal(!abrirModal)

            }
        }
    }
    return (
        <View style={styles.container}>

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
                        [dataSelected]: { marked: true, selectedDotColor: 'orange' }
                    }}
                    theme={{
                        calendarBackground: '#222',
                        dayTextColor: '#fff',
                        textDisabledColor: '#444',
                        monthTextColor: '#888'
                    }}
                />
            </View>
            <View>
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
                            <Text style={styles.Cliente}>Nova Sessão</Text>

                            <View style={styles.Section}>
                                <Image style={styles.profilePicture} source={{
                                    uri: url + "/tccBackupTeste/BD/tatuadores/imgsTatuadores" + "/" + userData?.imagem
                                }} />
                                <Text style={{
                                    fontSize: 20, fontWeight: '900', marginLeft: 30,
                                }}>{userData?.nome} </Text>
                            </View>

                            <View style={styles.Section}>
                                <MaterialIcons style={styles.Icon} name="person-search" size={23} color="#000" />
                                <Text style={styles.Entrada}>Cliente: </Text>
                                <TextInput
                                    style={styles.InputText}
                                    placeholder="..."
                                    placeholderTextColor='#413B33'
                                    value={cliente}
                                    multiline={false}
                                    onChangeText={(cliente) => setCliente(cliente)}
                                />
                            </View>

                            <View style={styles.Section}>
                                <MaterialIcons style={styles.Icon} name="calendar-today" size={23} color="#000" />
                                <Text style={styles.Entrada}>Data: </Text>
                                <Text style={styles.EntradaValue}>{dataSelected}</Text>
                            </View>

                            <View style={styles.Section}>
                                <MaterialIcons style={styles.Icon} name="lock-clock" size={23} color="#000" />
                                <Text style={styles.Entrada}>Horário: </Text>
                                <TouchableOpacity
                                    style={styles.btnHoras}
                                    onPress={() => showMode('time')}>
                                    <Text style={styles.text}>Selecionar</Text>

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

                            <View style={styles.Section}>
                                <MaterialIcons style={styles.Icon} name="attach-money" size={23} color="#000" />
                                <Text style={styles.Entrada}>Valor: </Text>
                                <TextInput
                                    style={styles.InputText}
                                    placeholder="R$200.50"
                                    placeholderTextColor='#413B33'
                                    value={valor}
                                    multiline={false}
                                    onChangeText={(valor) => setValor(valor)}
                                />
                            </View>
                            <View style={styles.SectionAnotacao} >
                                <SimpleLineIcons style={styles.Icon} name="note" size={23} color="#000" />
                                <Text style={styles.Entrada}>Anotações: </Text>
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
                                style={styles.cadastarSessao}
                                onPress={cadastrarSessao}>
                                <Text style={styles.text}>Cadastrar</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>

            </View >
        </View >
    )
}