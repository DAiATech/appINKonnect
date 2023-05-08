import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DrawerActions, useNavigation } from '@react-navigation/core';

import Header from '../../components/PagePreSet/Header';
import SearchBar from '../../components/Feed/SearchBar';
import Post from '../../components/Feed/Post';
import { POSTS } from '../../assets/data/posts';


const Feed = () => {
    return (
        <SafeAreaProvider style={styles.container}>

            {/* Tutorial para FEED DE POSTS do instagram: https://www.youtube.com/watch?v=pQmixUIdLN4*/}

            <Header />
            {/* Caso queira colocar o feed sem repetir, apagaga a <SearchBar /> e descomenta a ScrollView 
            */}
            <SearchBar />

            <ScrollView style={styles.feedContainer}>
                {
                    POSTS.map((post, index) => (
                        <Post post={post} key={index} />
                    ))
                }
            </ScrollView>

            <View style={styles.containerBox}>
            </View>
        </SafeAreaProvider>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        flex: 1,
    },
    feedContainer: {
        width: '90%',
        alignSelf: 'center',
    }

});
export default Feed;