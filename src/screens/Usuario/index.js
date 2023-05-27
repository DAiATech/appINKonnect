import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { ScrollView, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, Dimensions, Alert } from 'react-native';



import Header from '../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import api from '../../services/api';
import Grid from '../../components/Grids/Usuarios';

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Usuario() {

  const navigation = useNavigation();

  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [busca, setBusca] = useState("");
  const [onEndReachedCalledDuringMomentum, setMT] = useState(true);


  async function loadData() {
    try {
      const response = await api.get(`tccBackupTeste/bd/usuarios/listar.php?pagina=${page}&limite=10`);

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
    const response = await api.get(`tccBackupTeste/bd/usuarios/buscar.php?buscar=${busca}`);
    setLista(response.data.resultado);
  }

  useEffect(() => {
    loadData();
  }, [page, totalItems, lista]);

  return (
    <View style={styles.container}>

      <Header title="Lista de Usuários"></Header>

      <View style={{ backgroundColor: '#121212', paddingHorizontal: 15, flex: 1, }}>
        <View style={styles.containerSearch}>
          <TextInput
            style={styles.search}
            placeholder="Buscar Por Documento ou Nome"
            placeholderTextColor="gray"
            keyboardType="default"
            onChangeText={(busca) => setBusca(busca)}
            returnKeyType="search"
            onTextInput={() => Search()}
          />

          <TouchableOpacity
            style={styles.iconSearch}
            onPress={() => Search()}
          >
            <Ionicons name="search-outline" size={28} color="gray" />
          </TouchableOpacity>
        </View>


        <View style={{ flex: 1, height: Dimensions.get('window').height + 30, }}>

          <FlatList
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

        <View style={styles.containerFloat}>
          <TouchableOpacity
            style={styles.CartButton}
            onPress={() => navigation.push("NovoUsuario", { id_reg: '0' })}
          >
            <Ionicons name="add-outline" size={35} color="#fff" />
          </TouchableOpacity>
        </View>


      </View>

    </View>
  )
}