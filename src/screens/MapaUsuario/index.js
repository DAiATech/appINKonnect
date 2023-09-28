import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState, useRef } from "react";
import { css } from './style';
import { ScrollView, ActivityIndicator, Text, FlatList, Image, TextInput, TouchableOpacity, View, Dimensions, Alert, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../../services/api';
import Grid from '../../components/Grids/TatuadoresProfilesDiscover';
import { getUserData } from "../../components/userData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderUsuario from "../../components/PagePreSet/HeaderUsuario";

/* mapa imports */
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
/* import { css } from './assets/css/Css'; */
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import config from '../../../config';
import marcador from '../../assets/images/mapa/marker.png';
import marcadorDestino from '../../assets/images/mapa/markerDestino.png';

import url from "../../services/url";

export default function MapaScreen() {

    const navigation = useNavigation();

    const [origin, setOrigin] = useState(null);
    const [region, setRegion] = useState(null);
    const [destination, setDestination] = useState(null);

    const mapEl = useRef(null);
    const [distance, setDistance] = useState(null);
    const { height, width } = Dimensions.get('window');

    const LATITUDE_DELTA = 0.005;
    const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

    const [markers, setMarkers] = useState([]);


    const [lista, setLista] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    async function loadEstudiosLocais() {
        try {
            console.log('lets');

            const response = await api.get(`InKonnectPHP/bd/tatuadores/listarEstudiosLocais.php?limite=10`);
            console.log('DATA É ' + response.data);

            if (lista.length >= response.data.totalItems) return;

            if (loading === true) return;

            setLoading(true);

            setLista([...lista, ...response.data.resultado]);
            console.log('A LENGHT É', lista);
            setPage(page + 1);
        } catch (error) {
            console.log(error)
        }
    }

    /* function newMarker(e) {
        let dados = {
            key: markers.lenght,
            coords: {
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
            },
            pinColor: '#ff0000'
        }
        setRegion({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        })

        setMarkers(oldArray => [...oldArray, dados])
    } */

    useEffect(() => {
        (async function () {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status == 'granted') {
                let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
                setRegion({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                    /* latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421, */
                })
            }
            else {
                throw new Error('Localização não encontrada');
            }
        })();
        loadEstudiosLocais();
    }, [lista]);

    return (
        <View style={css.container}>
            <HeaderUsuario />
            <MapView //pega localizacao da onde a gnt está e cria o mapa
                style={css.map}
                region={region}
                showsUserLocation={true}
                maxZoomLevel={15}
                zoomTapEnabled={true}
                zoomControlEnabled={true}
                minZoomLevel={1}
                zoomEnabled={true}
                loadingEnabled={true}
                ref={mapEl}
            >

                {/* {markers.map(marker => {
                    return (
                        <Marker key={marker.key} coordinate={marker.coords} pinColor={marker.pinColor}
                        >
                            <View style={css.marcador}>
                                <Image
                                    source={marcador}
                                    style={css.marcadorImage}
                                >
                                </Image>
                                <Text style={{ color: 'white', fontSize: 13 }}>Meu Local</Text>
                            </View>
                        </Marker>
                    )
                })} */}
                {lista.map((estudio) => {
                    return (
                        <Marker key={estudio.estudioId}
                            coordinate={{ latitude: Number(estudio.latitude), longitude: Number(estudio.longitude) }}
                            pinColor={'#ff0000'}
                            title={estudio.estudioNome}
                            description={estudio.enderecoNome}
                            onCalloutPress={() => navigation.navigate('VisitaTatuadorProfile', {
                                tatuadorId: estudio.tatuadorId,
                                tatuadorNome: estudio.tatuadorNome,
                                tatuadorEspecialidade: estudio.especialidade,
                                tatuadorNasc: estudio.tatuadorNascimento,
                                tatuadorImgProfile: estudio.imgRandomName,
                                estudioEndereco: estudio.enderecoNome,
                                estudioNome: estudio.estudioNome
                            })
                                                }                 >
                            <View style={css.marcador}>
                                <Image
                                    source={{ uri: url + "InKonnectPHP/BD/tatuadores/imgsTatuadores" + "/" + estudio.imgRandomName }}
                                    style={css.marcadorImage}
                                >
                                </Image>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>{estudio.tatuadorNome}</Text>
                            </View>
                        </Marker>
                    )
                })}

                {/*verifica se tem valor de destino*/}
                {/* <Marker
                    coordinate={{ latitude: -24.495, longitude: -47.8456 }}
                    title={'Você está aqui meu amigo camarada'}
                    description={'ORIGEM!'}
                >
                    <View style={css.marcador}>
                        <Image
                            source={marcador}
                            style={css.marcadorImage}
                        >
                        </Image>
                        <Text style={{ color: 'white', fontSize: 13 }}>Meu Local</Text>
                    </View>
                </Marker>

                <Marker
                    coordinate={{ latitude: -25.0124332, longitude: -47.9416918 }}
                    title={'Você quer chegar aqui!'}
                    description={'acho que é aqui né kkk'}
                >
                    <View style={css.marcadorDestino}>
                        <Image
                            source={marcadorDestino}
                            style={css.marcadorImage}
                        >
                        </Image>
                        <Text style={{ color: 'white', fontSize: 13 }}>Seu destino!</Text>
                    </View>
                </Marker> */}


                {/* {destination &&

          <MapViewDirections
            origin={origin}
            destination={{latitude: -25.0124332, longitude: -47.9416918}}
            apikey={config.googleApi}
            strokeWidth={10}
            strokeColor='#f0f'
            onReady={result => {
              setDistance(result.distance);
              mapEl.current.fitToCoordinates(
                result.coordinates, {
                edgePadding: {
                  top: 50,
                  bottom: 50,
                  left: 50,
                  right: 50
                }
              }
              );
            }
            }
          >
          </MapViewDirections>
        } */}
            </MapView>

        </View>
    )
}