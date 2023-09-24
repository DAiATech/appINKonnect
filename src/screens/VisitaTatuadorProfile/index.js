import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { styles } from './style';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    RefreshControl,
    StatusBar,
    Alert,
    Modal,
    TextInput,
    FlatList,
    Dimensions,
    ImageBackground,

} from 'react-native';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome, Entypo, EvilIcons, FontAwesome5 } from '@expo/vector-icons';
import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Grid from '../../components/Grids/Postagens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import url from '../../services/url';
export default function VisitaTatuadorPofile() {
    const navigation = useNavigation();
    /* Route para pegar os parametros passados */
    const route = useRoute();

    const getHeader = () => {
        return <View style={styles.userDataContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                <Entypo name="drop" size={24} color="white" style={{ marginLeft: -5, }} />
                <Text style={styles.userDataText}>Nome do Estúdio: {route.params.estudioNome} </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                <Entypo name="drop" size={24} color="white" style={{ marginLeft: -5, }} />
                <Text style={styles.userDataText}>Endereço: {route.params.estudioEndereco} </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                <AntDesign name="hearto" size={25} color="white" style={{ marginLeft: -5, }} />
                <Text style={styles.userDataText}>Especialidade: {route.params.tatuadorEspecialidade} </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                <MaterialCommunityIcons name="cake" size={24} color="white" style={{ marginLeft: -5, }} />
                <Text style={styles.userDataText}>Nasceu: {route.params.tatuadorNasc} </Text>
            </View>
        </View>
    };
    const [lista, setLista] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    async function loadData() {
        try {
            const response = await api.get(`InKonnectPHP/bd/tatuadores/postagensTatuador.php?ab=${route.params.tatuadorId}`);

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
    useEffect(() => {
        console.log(route.params.tatuadorImgProfile)
        loadData();
    }, [lista]
    );


    return (
        <SafeAreaProvider style={styles.container}>
            <Text style={{ textAlign: 'center' }}>{route.params.tatuadorId}</Text>
            <View style={styles.containerHeader}>
                <ImageBackground source={require('../../assets/images/wallpaperProfileImage.png')} style={styles.imageBackground}>

                </ImageBackground>
                <View style={styles.headerFooter}>
                <Image style={styles.profilePicture} source={{
                        uri: url + "/InKonnectPHP/BD/tatuadores/imgsTatuadores" + "/" + route.params.tatuadorImgProfile
                    }} />
                    <View style={styles.headerContainerNameBtn}>
                        <Text style={styles.headerUserName}>
                            {route.params.tatuadorNome}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{
                flex: 1, height: Dimensions.get('window').height + 50, padding: 20,
                top: 25,
            }}>
                <FlatList
                    style={{ backgroundColor: '#121212', flex: 1, }}
                    horizontal={false}
                    data={lista}
                    renderItem={renderItem}
                    ListHeaderComponent={getHeader}
                />
            </View>
        </SafeAreaProvider>
    );
};
