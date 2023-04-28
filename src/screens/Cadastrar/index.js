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

export default function Cadastrar() {
  const navigation = useNavigation();

  const [logged, setLogged] = useState(0);
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  async function login() {
    const obj = { email, senha };
    const res = await api.post('pam3etim/BD/login/login.php', obj);

    if (res.data.result === 'Dados Incorretos!') {
      Alert.alert('Ops!', 'Dados Incorretos!');
    } else {
      await AsyncStorage.setItem('@user', JSON.stringify(res.data.result[0].id));
      await AsyncStorage.setItem('@nivel', JSON.stringify(res.data.result[0].nivel));

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      });
    }

  }


  async function saveData() {
    alert("oi!");

    if (nome == "" || senha == "" || email =="" ) {
        showMessage({
            message: "Erro ao Salvar",
            description: 'Preencha os Campos Obrigatórios!',
            type: "warning",
        });
        return;
    }

    try {
        const obj = {
            id: id,
            nome: nome,
            email: email,
            senha: senha,
        }

        const res = await api.post('pam3etim/bd/usuarios/cadastrar.php', obj);

        if (res.data.sucesso === false) {
            showMessage({
                message: "Erro ao Salvar",
                description: res.data.mensagem,
                type: "warning",
                duration: 3000,
            });

            return;
        }

        setSucess(true);
        showMessage({
            message: "Salvo com Sucesso",
            description: "Registro Salvo",
            type: "success",
            duration: 800,
        });
        navigation.push("Usuario")

    } catch (error) {
        Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
        setSucess(false);
    }
}
  const checkLogin = async () => {
    
    const user = await AsyncStorage.getItem('@user');
    if (confirmarSenha != "" && confirmarSenha == senha ) {
       
        navigation.navigate('Login');
       navigate({saveData}) ;
        
        /* if (user) {
            setLogged(1);
      
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            });
          } else {
            setLogged(2)
          } */
    }
    else {
        Alert.alert('Senhas Diferentes !')
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
        <Text style={styles.formLabel}>Nome:</Text>
        <TextInput
          style={styles.login}
          placeholder="João da Silva"
          placeholderTextColor='#413B33'
          value={nome}
          onChangeText={(nome) => setNome(nome)}
        />

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
          secureTextEntry={true}
          style={styles.login}
          placeholder="Senha"
          value={senha}
          onChangeText={(senha) => setSenha(senha)}
        />

        <Text style={styles.formLabel}>Confirme a senha:</Text>
        <TextInput
          placeholderTextColor='#413B33'
          secureTextEntry={true}
          style={styles.login}
          placeholder="Senha"
          value={confirmarSenha}
          onChangeText={(confirmarSenha) => setConfirmarSenha(confirmarSenha)}
        />

      </View>

    {/*   <TouchableOpacity
        style={styles.loginSave}
        onPress={login}
      >

        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
 */}
      <TouchableOpacity
        style={styles.loginSave}
        onPress={checkLogin}
      /* onPress={} */
      >

        <Text style={styles.text}>Cadastrar</Text>
      </TouchableOpacity>

      <Image style={styles.logoInk} source={require('../../assets/logo_2.png')} />

    </View>
  )
}