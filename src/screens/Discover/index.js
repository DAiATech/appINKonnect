import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { ScrollView, ActivityIndicator, Modal, FlatList, Image, Text, TextInput, TouchableOpacity, View, Dimensions, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import HeaderUsuario from "../../components/PagePreSet/HeaderUsuario";
import { Ionicons } from '@expo/vector-icons';
import api from '../../services/api';
import Grid from '../../components/Grids/TatuadoresProfilesDiscover';
import { getUserData } from "../../components/userData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EvilIcons } from '@expo/vector-icons'

export default function Discover() {

  const navigation = useNavigation();
  const [abrirFiltro, setAbrirFiltro] = useState(false);
  const [abrirModalEstilos, setAbrirModalEstilos] = useState(false);

  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [busca, setBusca] = useState("");
  const [onEndReachedCalledDuringMomentum, setMT] = useState(true);

  const [estiloSearch, setEstiloSearch] = useState(
    ['PONTILHISMO', 'OLD SCHOOL', 'GEOMÉTRICO', 'MINIMALISTA', 'BLACKWORK', 'SINGLE LINE', 'GLITCH', 'TINTA BRANCA', 'TINTA VERMELHA', 'PRETO E BRANCO', 'AQUARELA', 'ORIENTAL', 'REALISTA', 'MAORI']
  );
  const [estiloSelecionado, setEstiloSelecionado] = useState([]);


  /* ------- btn */
  const [showBtn, setShowBtn] = useState(false);
  /* btn----- */
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
    /* setLista(response.data.resultado); */
  }
  async function SearchFilter(item) {
    const response = await api.get(`InKonnectPHP/bd/usuarios/buscarFiltro.php?filtro=${item}`);
    setLista(response.data.resultado);
    /* setLista(response.data.resultado); */
  }

  useEffect(() => {
    loadData();
  }, [page, totalItems, lista]);

  return (
    <View style={styles.container}>

      <HeaderUsuario />

      <View style={{ backgroundColor: '#121212', flex: 1, }}>
        <View style={styles.containerButtons}>
          {showBtn == true ?
            <>
              <View style={styles.containerSearch}>
                <TextInput
                  style={styles.search}
                  placeholder="Buscar"
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
            </>
            : <TouchableOpacity
              style={styles.btnItens}
              onPress={() => setShowBtn(true)}
            >
              <Image style={styles.btnImage} source={require('../../assets/images/icons/lupa.png')} />
            </TouchableOpacity>
          }

          <TouchableOpacity
            style={styles.btnItens}
            onPress={() => {
              navigation.navigate("MapaScreen")
              /* Insert the path that client should follow  */
            }}

          >
            <Image style={styles.btnImage} source={require('../../assets/images/icons/location.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnItens}
            onPress={() => {
              setAbrirModalEstilos(true)
              /* navigation.navigate("...") */
              /* Insert the path that client should follow  */
            }}
          >
            <Image style={styles.btnImage} source={require('../../assets/images/icons/filtro.png')} />
          </TouchableOpacity>
        </View>
        {abrirFiltro ?
          <View style={{ backgroundColor: '#413B33', padding: 5, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-around', }}>
            <TouchableOpacity
              style={styles.btnSelectStyle}
              onPress={() => {
                setAbrirModalEstilos(true)
                /* navigation.navigate("...") */
                /* Insert the path that client should follow  */
              }}
            >
              <Text style={{ color: '#f0f' }}>Filtrar Estilo</Text>
            </TouchableOpacity>
          </View>
          :
          <></>
        }
        <Modal
          visible={abrirModalEstilos}
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => {
            setAbrirModalEstilos(!abrirModalEstilos)
          }}
        >
          <View style={styles.centralizarModal}>
            <View style={styles.CardContainerModal}>
              <TouchableOpacity
                style={styles.removeItem}
                onPress={() => setAbrirModalEstilos(false)}
              >
                <EvilIcons name="close" size={25} color="black" />
              </TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ borderRadius: 25, overflow: 'hidden', height: 50, width: 200, alignSelf: 'center' }
                }>
                  <Picker
                    selectedValue={estiloSelecionado}
                    style={styles.selectEspecialidade}
                    onValueChange={(itemValue) => {
                      setEstiloSelecionado(itemValue);
                      setAbrirModalEstilos(false);
                      SearchFilter(itemValue)
                    }
                    }>
                    {
                      estiloSearch.map(esp => {
                        return <Picker.Item color='#5E503F' style={styles.pickerText} label={esp} value={esp} />
                      })
                    }
                  </Picker>
                </View>
              </View>
            </View>
          </View>
        </Modal>
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