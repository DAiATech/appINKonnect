import { View, Text, StyleSheet, ScrollView, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Feather, Search } from 'react-native-feather';
import SearchFIlter from '../SearchFilter';
import { POSTS } from '../../assets/data/posts';
import { set } from 'react-native-reanimated';

const SearchBar = () => {
    const [input, setInput] = useState("");
    console.log(input)
    return (
        <View style={styles.container}>
            {/* Tutorial para searchBar FUNCIONAL: https://www.youtube.com/watch?v=achVk8c_93Y */}
            {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    USERS.map((story, index) => (
                        <View key={index} style={styles.storyContainer}>
                            <Image style={styles.story} source={{ uri: story.image }} />
                            <Text style={styles.storyText}>{story.user.length > 5 ? story.user.slice(0, 7).toLocaleLowerCase() + '... ' : story.user.toLowerCase()}</Text>
                        </View>
                    ))
                }
            </ScrollView>  */}

            <View style={styles.box}>
                <Search
                    name="search"
                    size={10}
                    color="#EAE0D5"
                    style={styles.iconSearch}
                />
                <TextInput value={input} onChangeText={(text) => setInput(text)} placeholder="Search"
                    style={styles.inputTexto}
                >
                </TextInput>
            </View>

            <SearchFIlter data={POSTS} input={input} setInput={setInput} />

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        margin: 20,
        width: "90%",
        alignSelf:'center',
    },
    box: {
        padding: 3,
        flexDirection: 'row',
        width: "100%",
        backgroundColor: "#413B33",
        borderRadius: 50,
        alignSelf:'center',
    },
    inputTexto: {
        fontSize: 15,
        color: "#EAE0D5",

    },
    iconSearch: {
        marginLeft: 1,
        marginRight: 4,
    },
});
export default SearchBar;