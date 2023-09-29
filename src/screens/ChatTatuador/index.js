import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { ScrollView, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, Dimensions, Alert, Text } from 'react-native';
import Header from "../../components/PagePreSet/Header";
import { Ionicons } from '@expo/vector-icons';
import api from '../../services/api';
import Grid from '../../components/Grids/ListaClientesChat';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ChatTatuador() {

  const navigation = useNavigation();

  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [busca, setBusca] = useState("");
  const [onEndReachedCalledDuringMomentum, setMT] = useState(true);


  async function loadData() {
    try {
      const response = await api.get(`InKonnectPHP/bd/usuarios/listarUsuarios.php?pagina=${page}&limite=10`);

      if (lista.length >= response.data.totalItems) return;

      if (loading === true) return;

      setLoading(true);
      console.log(response.data)

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

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        renderItem={renderItem}
        data={lista}
      />
    </View>
  )
}