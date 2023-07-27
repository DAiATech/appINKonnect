import React, { useState } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { styles } from './styles';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import { getUserData } from '../userData';
import AsyncStorage from "@react-native-async-storage/async-storage";
import url from '../../services/url';
import { useEffect } from 'react';

const CustomDrawer = FC = () => {
    const navigation = any = useNavigation();

    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [imgProfile, setImgProfile] = useState(null);
    /*  async function setarDados() {
         const valorNome = await AsyncStorage.getItem('@nome');
         setNome(valorNome);
 
         const nomeUrl = await AsyncStorage.getItem('@email');
         setEmail(nomeUrl.substring(1, nomeUrl.length - 1));
 
         const valorImg = await AsyncStorage.getItem('@imgProfileNome');
         setImgProfile(JSON.parse(valorImg));
 
         console.log({ imgProfile })
     }
     setarDados();
  */


    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData();
            setUserData(data);
        };
        fetchUserData();
    }, []);

    async function logout() {
        Alert.alert('Sair', `Você tem certeza que quer sair?`, [
            {
                text: 'Não',
                style: 'cancel',
            },

            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        await AsyncStorage.clear();
                        navigation.navigate('ChooseUser');
                    } catch (error) {
                        Alert.alert('Não foi possivel sair, tente novamente!')
                    }
                }
            }
        ])
    }
    async function getUsuarioDados() {
        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get('InKonnectPHP/BD/login/loginTatuador.php', user);

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={{ flex: 1, }}>
            <ScrollView
                style={styles.container}
            >
                <View style={styles.header}>
                    <Image style={styles.perfilImg} source={{
                        uri: url + "/InKonnectPHP/BD/tatuadores/imgsTatuadores" + "/" + userData?.imagem
                    }} />
                    <Text style={styles.perfilName}>
                        {userData?.nome}
                    </Text>

                </View>
                <View>
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("TatuadorProfile")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}
                    >
                        <MaterialIcons style={styles.iconRegistered} name="people-alt" size={30} color="gray" />

                        <Text style={styles.PagesText}>Meu Perfil</Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={() => logout()}
                    style={styles.btnSair}
                >
                    <MaterialIcons name="subdirectory-arrow-left" size={25} color="gray" />
                    <Text style={styles.SairText}>Sair da conta</Text>
                </TouchableOpacity>
                <View style={styles.footerImgDiv}>
                    <Image style={styles.logo} source={require('../../assets/logo_2.png')} />
                </View>
            </View>
        </View>
    );
}

export default CustomDrawer;