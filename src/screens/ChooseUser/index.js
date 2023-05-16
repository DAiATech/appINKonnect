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
                                alert('Os botoes agora mandam para telas diferentes, só falta criar as telas certinho, se quiser rodar o app sem dar erro é so voltar o caminho do botão do tatuador ass.Arthur');
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
                                navigation.navigate("LoginTatuador") 
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