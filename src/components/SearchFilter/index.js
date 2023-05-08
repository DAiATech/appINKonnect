import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import { POSTS } from '../../assets/data/posts';
import Post from '../../components/Feed/Post';


const SearchFIlter = ({ data, input, setInput }) => {
    return (
        <View style={{ marginTop: 10, }}>
            <FlatList data={data} renderItem={({ item }) => {
                if (input === "") {
                    return (
                         /*  {
                                POSTS.map((post, index) => (
                                    <Post post={post} key={index} />
                                ))
                            } */
                        <View style={styles.container}>
                            <Text style={styles.texto}>{item.user}</Text>
                        </View>

                           
                    )
                }

            if (item.user.toLowerCase().includes(input.toLowerCase())) {
                    return (
            <View style={styles.container}>
                <Text style={styles.texto}>{item.user}</Text>

                {/* {
                                POSTS.map((post, index) => (
                                    <Post post={post} key={index} />
                                ))
                            } */}
            </View>
            )
                }

            }} />
        </View>
    )
}


export default SearchFIlter

const styles = StyleSheet.create({
    texto: {
        color: '#f0f',
        fontSize: 14,
        fontWeight: 'bold',
    },
    container: {
        marginVertical: 10,
    },
    line: {
        borderColor: "gray",
        borderWidth: 1,
        height: 1,
        marginTop: 5,
    },
})