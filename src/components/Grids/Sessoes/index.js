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

const DadosProps = {
    data: {
        id: string,
        dataSessao: string,
        horario: string,
        valor: string,
        anotacoes: string,
        tatuador: string,
        cliente: string,
    }
}

CardSessoes = ({ data } = DadosProps) => {
    const navigation = any = useNavigation();


    return (
        <>
            {data.id === undefined && data.nome === undefined ?
                <Text style={{ color: '#595858', fontSize: 14, marginTop: 10, alignContent: "center", textAlign: "center" }}>Nenhuma sessão marcada!</Text>
                :

                <View style={{ marginBottom: 20, paddingBottom: 10, paddingTop: 10, borderBottomWidth: 2, borderBottomColor: '#413B33',  }}>
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemTitle}>
                            Sessão {data.dataSessao} - {data.horario}
                        </Text>
                        <View style={styles.itemClienteContainer}>
                            <Text style={styles.itemClienteNameText}>{data.cliente}</Text>
                            <TouchableOpacity style={styles.IconBackground}>
                                <MaterialIcons name='message' size={20} color='#000' />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.itemDatasContainer}>
                            <View style={styles.itemSection}>
                                <Text style={styles.itemText}>Notas:</Text>
                                <Text style={styles.itemDataText}>{data.anotacoes}</Text>
                            </View>
                            <View style={styles.itemSection}>
                                <Text style={styles.itemText}>Preço:</Text>
                                <Text style={styles.itemDataText}>R$ {data.valor}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            }


        </>
    );
}

export default CardSessoes;