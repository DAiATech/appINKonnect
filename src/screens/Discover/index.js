import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { ScrollView, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, Dimensions, Alert } from 'react-native';
import HeaderUsuario from "../../components/PagePreSet/HeaderUsuario";
import { Ionicons } from '@expo/vector-icons';
import api from '../../services/api';
import Grid from '../../components/Grids/TatuadoresProfilesDiscover';
import { getUserData } from "../../components/userData";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Discover() {

  const navigation = useNavigation();

  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [busca, setBusca] = useState("");
  const [onEndReachedCalledDuringMomentum, setMT] = useState(true);

  async function loadData() {
    try {
      const user = await AsyncStorage.getItem('@user');

      console.log(user);
      const response = await api.get(`InKonnectPHP/bd/usuarios/listarTatuadores.php?usuarioId=${user}`);

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

      <View style={{ backgroundColor: '#121212', flex: 1, }}>
        <View style={styles.containerButtons}>
          <TouchableOpacity
            style={styles.btnItens}
            onPress={() => {
              /* navigation.navigate("...") */

              /* Insert the path that client should follow  */
            }}
          /* onPress={} */
          >
            <Image style={styles.btnImage} source={require('../../assets/images/icons/lupa.png')} />

          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnItens}
            onPress={() => {
              navigation.navigate("MapaScreen")
              /* Insert the path that client should follow  */
            }}
          /* onPress={} */
          >
            <Image style={styles.btnImage} source={require('../../assets/images/icons/location.png')} />

          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnItens}
            onPress={() => {
              /* navigation.navigate("...") */
              /* Insert the path that client should follow  */
            }}
          /* onPress={} */
          >
            <Image style={styles.btnImage} source={require('../../assets/images/icons/filtro.png')} />

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
      </View>

    </View>
  )
}