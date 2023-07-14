import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { ScrollView, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../../services/api';
import Grid from '../../components/Grids/TatuadoresProfiles';
import { getUserData } from "../../components/userData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderUsuario from "../../components/PagePreSet/HeaderUsuario";
export default function MapaScreen() {

    const navigation = useNavigation();



    return (
        <View style={styles.container}>

        <HeaderUsuario/>

        
        </View>
    )
}