import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

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
import { storeUserData } from "../../components/userData";
export default function LoginUsuario() {
  const navigation = useNavigation();

  const [logged, setLogged] = useState(0);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function login() {
    const obj = { email, senha };
    const res = await api.post('InKonnectPHP/BD/login/login.php', obj);

    if (res.data.result === 'Dados Incorretos!') {
      Alert.alert('Ops!', 'Dados Incorretos!');
    } else {
      storeUserData(res.data.result[0].id, res.data.result[0].nome, res.data.result[0].email, res.data.result[0].imagemProfile).then(() => {
        console.log('userdatastored');
      })

      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeCliente' }]
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
      <StatusBar translucent hidden />

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
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.loginSave}
          onPress={login}
        >
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginSave}
          onPress={() => {
            navigation.navigate("CadastrarUsuario")
          }}
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
      </View>
      {/*        achei que um botao de voltar seria legal pra tela de login, mas, acabou que nao gostei muito de como ficou no design, tem que ver com o Igor ass.Arthur */}
      <Image style={styles.logoInk} source={require('../../assets/logo_2.png')} />

    </View>
  )
}