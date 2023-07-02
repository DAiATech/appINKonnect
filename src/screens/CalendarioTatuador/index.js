import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { ScrollView, ActivityIndicator, FlatList, Text, Image, TextInput, TouchableOpacity, View, Dimensions, Alert, Modal } from 'react-native';
import Header from "../../components/PagePreSet/Header";
import { Ionicons, EvilIcons, MaterialIcons } from '@expo/vector-icons';
import api from '../../services/api';
import Grid from '../../components/Grids/TatuadoresProfiles';
import { getUserData } from "../../components/userData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Calendar } from "react-native-calendars";
export default function CalendarioTatuador() {

    const navigation = useNavigation();
    const [selected, setSelected] = useState('');
    const [dates, setDates] = useState([]);
    const [abrirModal, setAbrirModal] = useState(false);
    const [descricao, setDescricao] = useState();

    return (
        <View style={styles.container}>

            <Header />

            <Calendar
                style={{ borderRadius: 20, borderWidth: 1, height: 350, marginHorizontal: 25, marginTop: 25 }}
                onDayPress={day => {
                    setSelected(day.dateString);
                    console.log(selected);
                    setAbrirModal(true);
                }}
                markedDates={{
                    [selected]: { marked: true, selectedDotColor: 'orange' }
                }}
                theme={{
                    calendarBackground: '#222',
                    dayTextColor: '#fff',
                    textDisabledColor: '#444',
                    monthTextColor: '#888'
                }}
            />

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
                                <MaterialIcons style={styles.Icon} name="people-outline" size={22} color="#c1c1c1" />

                            </View>

                            <View style={styles.Section}>
                                <MaterialIcons style={styles.Icon} name="mail" size={22} color="#c1c1c1" />
                                <Text style={styles.Entrada}>Especialidade: </Text>
                                <Text style={styles.Entrada}>Telefone: </Text>
                            </View>


                            <View style={{ width: '50%', flexDirection: 'row', marginBottom: 40, }}>
                                <View style={{ alignContent: 'flex-end' }}>
                                    <TextInput
                                        style={styles.InputDescricao}
                                        placeholder="Descrição....."
                                        placeholderTextColor='#413B33'
                                        value={descricao}
                                        multiline={true}
                                        onChangeText={(descricao) => setDescricao(descricao)}
                                    />
                                </View>
                            </View>

                        </View>
                    </View>
                </Modal>

            </View>
        </View>
    )
}