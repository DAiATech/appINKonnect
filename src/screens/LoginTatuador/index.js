import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { storeUserData } from "../../components/userData";
import { styles } from './style';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  StatusBar,
  Alert,

} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

//import { Splash } from '../../lotties/Splash'; 
import api from '../../services/api';

export default function LoginTatuador() {
  const navigation = useNavigation();

  const [logged, setLogged] = useState(0);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');



  async function loginTatuador() {
    const obj = { email, senha };

    const res = await api.post('InKonnectPHP/BD/login/loginTatuador.php', obj);
    await AsyncStorage.setItem('@user', JSON.stringify(res.data.result[0].id));

    if (res.data.result === 'Dados Incorretos!') {
      Alert.alert('Ops!', 'Dados Incorretos!');
    } else {

      storeUserData(res.data.result[0].id, res.data.result[0].nome, res.data.result[0].email, res.data.result[0].imgRandomName, res.data.result[0].especialidade, res.data.result[0].dataNascimento, res.data.result[0].estudio,).then(() => {
        console.log('userdatastored');
        console.log(res.data.result[0].dataNascimento)
        console.log(res.data.result[0].estudio)
        console.log('Fim do Login')
      })
      /* await AsyncStorage.setItem('@nome', JSON.stringify(res.data.result[0].nome));
      await AsyncStorage.setItem('@email', JSON.stringify(res.data.result[0].email));
      await AsyncStorage.setItem('@imgProfileNome', JSON.stringify(res.data.result[0].imgRandomName)); */
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      });
    }

  }

  const checkLogin = async () => {
    const user = await AsyncStorage.getItem('@user');

    if (user) {
      setLogged(1);

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } else {
      setLogged(2)
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/INKonnect.png')} />

      <View style={styles.form}>

        <Text style={styles.formLabel}>Email:</Text>
        <TextInput
          style={styles.login}
          placeholder="Email"
          placeholderTextColor='#413B33'
          value={email}
          onChangeText={(email) => setEmail(email)}
        />

        <Text style={styles.formLabel}>Senha:</Text>
        <TextInput
          placeholderTextColor='#413B33'
          secureTextEntry={false}
          style={styles.login}
          placeholder="Senha"
          value={senha}
          onChangeText={(senha) => setSenha(senha)}
        />

      </View>

      <TouchableOpacity
        style={styles.loginSave}
        onPress={loginTatuador}
      >

        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginSave}
        onPress={() => {
          navigation.navigate("CadastrarTatuador")
        }}
      /* onPress={} */
      >

        <Text style={styles.text}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginVoltar}
        onPress={() => {
          navigation.navigate("ChooseUser")
        }}
      >
        <Text style={styles.text}>Voltar</Text>
      </TouchableOpacity>
      <Image style={styles.logoInk} source={require('../../assets/logo_2.png')} />

    </View>
  )
}