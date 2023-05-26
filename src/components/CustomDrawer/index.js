import React from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

import { styles } from './styles';
import { DrawerActions, useNavigation } from '@react-navigation/core';

import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomDrawer = FC = () => {
    const navigation = any = useNavigation();

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
                        navigation.navigate('Login');
                    } catch (error) {
                        Alert.alert('Não foi possivel sair, tente novamente!')
                    }
                }
            }
        ])
    }

    return (
        <View style={{ flex: 1, }}>
            <ScrollView
                style={styles.container}
            >
                <View>
                    <View style={{ width: '100%', backgroundColor: '#c1c1c1', height: 0.5, alignSelf: 'center', marginBottom: 5, marginTop: 20 }}></View>

                    <Image style={styles.perfil} source={require('../../assets/perfil.png')} />
                    <Text>


                    </Text>

                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Usuario")
                            navigation.navigate("")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}
                    >
                        <MaterialIcons style={styles.iconRegistered} name="people-alt" size={30} color="gray" />

                        <Text style={styles.PagesText}>Perfil</Text>
                    </TouchableOpacity>


                </View>
                <View>
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Usuario")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}
                    >
                        <MaterialIcons style={styles.iconRegistered} name="people-alt" size={30} color="gray" />

                        <Text style={styles.PagesText}>Perfil</Text>
                    </TouchableOpacity>


                </View>




            </ScrollView>

            <View style={styles.footer}>
                <View style={{ width: '90%', backgroundColor: '#c1c1c1', height: 0.5, alignSelf: 'center', marginBottom: 5, marginTop: 5 }}></View>
                <TouchableOpacity
                    onPress={() => logout()}
                    style={styles.Sair}
                >
                    <MaterialIcons name="subdirectory-arrow-left" size={25} color="gray" />
                    <Text style={styles.SairText}>Sair da conta</Text>
                </TouchableOpacity>
                <View style={{ width: '90%', backgroundColor: '#c1c1c1', height: 0.5, alignSelf: 'center', marginBottom: 5, marginTop: 5 }}></View>
                <Image style={styles.logo} source={require('../../assets/logo_2.png')} />
            </View>


        </View>
    );
}

export default CustomDrawer;