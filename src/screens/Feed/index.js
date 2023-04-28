import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from '../../components/Feed/Header';
import Stories from '../../components/Feed/Stories';
import Post from '../../components/Feed/Post';
import { POSTS } from '../../assets/data/posts';


const Feed = () => {
    return (
        <SafeAreaProvider style={styles.container}>
            <Header />
            <Stories />
            <ScrollView>
                {
                    POSTS.map((post, index) => (
                        <Post post={post} key={index} />
                    ))
                }
            </ScrollView>
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