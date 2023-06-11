import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import {
    ScrollView,
    ActivityIndicator,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    View,
    Dimensions,
    Alert,
    Text,
    SafeAreaView,
    RefreshControl
} from 'react-native';

import Header from '../../components/PagePreSet/Header';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import api from '../../services/api';

import { getUserData } from '../../components/userData';
import { SafeAreaProvider } from "react-native-safe-area-context";
import url from '../../services/url';

export default function HomeScreen() {


    return (
        <View style={styles.container}>

        </View>
        );
};
