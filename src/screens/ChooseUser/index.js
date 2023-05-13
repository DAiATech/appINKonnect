import { useNavigation } from "@react-navigation/native";
import { styles } from './style';
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
    ImageBackground,

} from 'react-native';
export default function ChooseUser() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/fundo.jpg')} resizeMode="cover" style={styles.backgroundImg}>
                <View style={styles.containerContent}>

                    <View style={styles.containerlogo}>
                        <Image style={styles.logo} source={require('./../../assets/logo_2.png')} />
                        <Text style={styles.Title}>Seja Bem vinde ao INKonnect</Text>
                    </View>
                    <View style={styles.containerButtons}>
                        <TouchableOpacity
                            style={styles.buttonClient}
                            onPress={() => {
                                alert('Os dois botoes mandam para a mesma tela de login ainda /os caminhos corretos nao foram definidos ass.Diego ');
                                navigation.navigate("Login")
                                /* Insert the path that client should follow  */
                            }}
                        /* onPress={} */
                        >

                            <Text style={styles.Buttontext}>Quero me Tatuar</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buttonArtist}
                            onPress={() => {
                                navigation.navigate("Login")
                                /* Insert the path that artist should follow  */
                            }}
                        /* onPress={} */
                        >

                            <Text style={styles.Buttontext}>Sou Tatuador</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};