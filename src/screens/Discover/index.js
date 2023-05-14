import React, { useEffect, useState } from 'react';

import { styles } from './style';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../../components/PagePreSet/Header';
import DiscoverPost from '../../components/DiscoverPost/DiscoverPost';
import { POSTS } from '../../assets/data/posts';
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
} from 'react-native';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

export default function Discover() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.containerButtons}>
                <TouchableOpacity
                    style={styles.btnSearchProfile}
                    onPress={() => {
                        navigation.navigate("...")
                        /* Insert the path that client should follow  */
                    }}
                /* onPress={} */
                >
                    <Image style={styles.btnImage} source={require('../../assets/images/icons/lupa.png')} />

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnSearchProfile}
                    onPress={() => {
                        navigation.navigate("...")
                        /* Insert the path that client should follow  */
                    }}
                /* onPress={} */
                >
                    <Image style={styles.btnImage} source={require('../../assets/images/icons/location.png')} />

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnSearchProfile}
                    onPress={() => {
                        navigation.navigate("...")
                        /* Insert the path that client should follow  */
                    }}
                /* onPress={} */
                >
                    <Image style={styles.btnImage} source={require('../../assets/images/icons/filtro.png')} />

                </TouchableOpacity>
            </View>

            <ScrollView style={styles.feedContainer}>
                {
                    POSTS.map((post, index) => (
                        <DiscoverPost post={post} key={index} />
                    ))
                }
            </ScrollView>
        </View>
    );
};

