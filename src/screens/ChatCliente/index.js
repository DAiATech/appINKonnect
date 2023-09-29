import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { ScrollView, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, Dimensions, Alert } from 'react-native';
import Header from "../../components/PagePreSet/HeaderUsuario";
import { Ionicons } from '@expo/vector-icons';
import api from '../../services/api';
import Grid from '../../components/Grids/ListaTatuadoresChat';
import url from "../../services/url";
import { getUserData } from "../../components/userData";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ChatCliente() {

  const navigation = useNavigation();

  /* Grid: */
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
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserData();
      setUserData(data);
    };
    fetchUserData();
    loadData();
  }, [page, totalItems, lista]);

  return (
    <View style={styles.container}>

      <Header />
      <View style={{ backgroundColor: '#121212', paddingHorizontal: 15, flex: 1, }}>
        <View style={{ flex: 1, height: Dimensions.get('window').height + 30, }}>
          <FlatList
            data={lista}
            renderItem={renderItem}
          />
        </View>
      </View>

    </View>
  )
}