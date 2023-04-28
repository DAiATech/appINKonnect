import React from 'react';
import { 
    StyleSheet,
    View,
} from 'react-native';

import LottieView from 'lottie-react-native';

import loadAnimation from '../assets/success.json';

export function Success(){
    return(
        <View style={styles.container}>
            <LottieView 
                source={loadAnimation}
                autoPlay
                loop
                style={styles.animation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    animation:{
        backgroundColor: 'transparent',
        width: 100,
        height: 100,
    },
})