import { View, Text, SafeAreaView, StyleSheet, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DrawerActions, useNavigation } from '@react-navigation/core';

import Header from '../../components/PagePreSet/Header';
import SearchBar from '../../components/Feed/SearchBar';
import Post from '../../components/Feed/Post';
import { POSTS } from '../../assets/data/posts';


const Feed = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaProvider style={styles.container}>
            <Header />
            <SearchBar />
            <ScrollView>
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
        backgroundColor: '#000',
        flex: 1,
    },

});
export default Feed;