import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Touchable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logoText} source={require('../../assets/images/instagram_text.png')} />
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Ionicons style={styles.icone} name='add-circle-outline' size={25} color={'#fff'} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons style={styles.icone} name='heart-circle' size={25} color={'#fff'} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadget}>
                        <Text style={styles.unreadBadgetText}>5</Text>
                    </View>
                    <Ionicons style={styles.icone} name='chatbubble-ellipses-outline' size={25} color={'#fff'} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        padding: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        color: '#fff',
        padding: 20,

    },
    logoText: {
        width: 100,
        height: 60,
        resizeMode: 'contain',
    }, icone: {
        marginLeft: 10,
    },
    unreadBadget: {
        position: 'absolute',
        backgroundColor: '#ff3508',
        right: -5,
        top: -5,
        borderRadius: 25,
        width: 25,
        height: 18,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    unreadBadgetText: {
        color: '#fff',
        fontWeight: '600',
    },  
});

export default Header;