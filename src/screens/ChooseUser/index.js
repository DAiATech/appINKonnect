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

} from 'react-native';
export default function ChooseUser() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerlogo}>
                <Image style={styles.logo} source={require('./../../assets/logo_2.png')} />
                <Text style={styles.Title}>Seja Bem vinde ao INKonnect</Text>
            </View>
            <View style={styles.containerButtons}>
                <TouchableOpacity
                    style={styles.buttonClient}
                    onPress={() => {
                        navigation.navigate("Login")
                    }}
                /* onPress={} */
                >

                    <Text style={styles.Buttontext}>Quero me Tatuar</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonArtist}
                    onPress={() => {
                        navigation.navigate("Login")
                    }}
                /* onPress={} */
                >

                    <Text style={styles.Buttontext}>Quero me Tatuar</Text>

                </TouchableOpacity>
            </View>
            <View>


            </View>
        </View>
    );
};