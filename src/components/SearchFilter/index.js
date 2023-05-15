import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react';
import { Divider } from '@rneui/base';
import { FlatList } from 'react-native';
import { POSTS } from '../../assets/data/posts';
import Post from '../../components/Feed/Post';


const SearchFIlter = ({ data, input, setInput }) => {
    return (
        <View style={{ marginTop: 10, }}>
            <FlatList style={{ width: '90%', alignSelf: 'center', }} data={POSTS} renderItem={({ item }) => {
                if (input === "") {
                    return (
                        <View style={styles.container}>
                            {/*  {
                                    POSTS.((post, index) => (
                                        <Post post={post} key={index} />
                                    ))
                                } */}
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.story} source={{ uri: item.profile_picture }} />
                                <Text style={styles.storyText}>
                                    {item.user}
                                </Text>
                            </View>
                            <View style={styles.postImageContainer}>
                                <Image style={styles.postImageImg} source={{ uri: item.imageUrl }} />
                            </View>
                            <View style={{ marginHorizontal: 15, marginTop: 10, }}>
                                <View style={styles.postCaptionContainer}>
                                    <Text style={styles.captionText}>
                                        <Text style={styles.captionUserText} >
                                            {item.user}:...
                                        </Text>
                                        {item.caption}
                                    </Text>
                                </View>
                            </View>
                            <Divider width={1} orientation='vertical' />
                        </View>
                    )
                }

                if (item.user.toLowerCase().includes(input.toLowerCase())) {
                    return (
                        <View style={{ marginBottom: 30 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.story} source={{ uri: item.profile_picture }} />
                                <Text style={styles.storyText}>
                                    {item.user}
                                </Text>
                            </View>
                            <View style={styles.postImageContainer}>
                                <Image style={styles.postImageImg} source={{ uri: item.imageUrl }} />
                            </View>
                            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                                <View style={styles.postCaptionContainer}>
                                    <Text style={styles.captionText}>
                                        <Text style={styles.captionUserText} >
                                            {item.user}:...
                                        </Text>
                                        {item.caption}
                                    </Text>
                                </View>
                            </View>
                            <Divider width={1} orientation='vertical' />
                        </View>

                        /* {/* <Text style={styles.texto}>{item.user}</Text> */

                    )
                }

            }} />
        </View >
    )
}


export default SearchFIlter

const styles = StyleSheet.create({
    texto: {
        color: '#990F09',
        fontSize: 14,
        fontWeight: 'bold',
    },
    container: {
        marginBottom: 20,
    },
    feedContainer: {
        width: '100%',
        alignSelf: 'center',
    },
    line: {
        borderColor: "gray",
        borderWidth: 1,
        height: 1,
        marginTop: 5,
    },
    containerPost: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        marginTop: 15,
        alignItems: 'center',
    },
    icone: {
        marginLeft: 10,
    },
    postImageContainer: {
        width: '100%',
        height: 300,
    },
    postImageImg: {
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 15,
    },
    postFooterContainer: {
        flexDirection: 'row',
    },
    postFooterIconContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between',
    },
    shareIcon: {
        transform: [{ rotate: '320deg' }],
        marginTop: -2,
    },
    postLikesContainer: {
        flexDirection: 'row',
        marginTop: 4,
    },
    likesText: {
        color: '#fff',
        fontWeight: '600'
    },
    postCaptionContainer: {
        flexDirection: 'row',
    },
    captionText: {
        color: '#fff',
        flexWrap: 'wrap',
        flex: 1,
        fontWeight: 'normal',
    },
    captionUserText: {
        fontWeight: '800'
    },
    postCommentSectionContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    commentText: {
        color: 'gray',
        flexWrap: 'wrap',
        flex: 1,
    },

    story: {
        width: 35,
        height: 35,
        marginLeft: 0,
        borderWidth: 1,
        borderColor: '#413B33',
        borderRadius: 70,
    },
    storyText: {
        color: '#EAE0D5',
        marginLeft: 5,
        fontWeight: '500',
        fontSize: 20,
    },
})