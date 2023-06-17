import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { ScrollView, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, Dimensions, Alert } from 'react-native';
import Header from "../../components/PagePreSet/Header";
import { Ionicons } from '@expo/vector-icons';
import api from '../../services/api';
import Grid from '../../components/Grids/TatuadoresProfiles';
import { getUserData } from "../../components/userData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Calendar } from "react-native-calendars";
export default function CalendarioTatuador() {

    const navigation = useNavigation();
    const [selected, setSelected] = useState('');
    const [dates, setDates] = useState([]);

    return (
        <View style={styles.container}>

            <Header />

            <Calendar
                style={{ borderRadius: 20, borderWidth: 1, height: 350, marginHorizontal: 25, marginTop: 25 }}
                onDayPress={day => {
                    setSelected(day.dateString);
                    
                }}
                markedDates={{
                    [selected]: { marked: true, selectedDotColor: 'orange' }
                }}
                theme={{
                    calendarBackground: '#222',
                    dayTextColor: '#fff',
                    textDisabledColor: '#444',
                    monthTextColor: '#888'
                }}
            />

            <View>

            </View>
        </View>
    )
}