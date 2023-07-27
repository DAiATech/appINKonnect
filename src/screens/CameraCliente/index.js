import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { ScrollView, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, Dimensions, Alert } from 'react-native';
import HeaderUsuario from "../../components/PagePreSet/HeaderUsuario";
import { Ionicons } from '@expo/vector-icons';
import api from '../../services/api';
import Grid from '../../components/Grids/TatuadoresProfilesDiscover';

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CameraCliente() {

  const navigation = useNavigation();

  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [busca, setBusca] = useState("");
  const [onEndReachedCalledDuringMomentum, setMT] = useState(true);


  async function loadData() {
    try {
      const response = await api.get(`InKonnectPHP/bd/usuarios/listarTatuadores.php?pagina=${page}&limite=10`);

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

  function Footer() {
    if (!load) return null;

    return (
      <View style={styles.loading}>
        <ActivityIndicator size={25} color="#000" />
      </View>
    )
  }

  async function Search() {
    const response = await api.get(`InKonnectPHP/bd/usuarios/buscar.php?buscar=${busca}`);
    setLista(response.data.resultado);
  }

  useEffect(() => {
    loadData();
  }, [page, totalItems, lista]);

  return (
    <View style={styles.container}>

      <HeaderUsuario />

      

    </View>
  )
}