import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { TouchableOpacity, View, Text, TextInput, Image, StatusBar, Alert, } from 'react-native';

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
  const [success, setSuccess] = useState(false);

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


  async function saveCadastro() {
    if (nome == "" || senha == "" || email == "")/* || confirmarSenha != "" && confirmarSenha == senha )*/ {
      console.log("diego");
      Alert({
        message: "Erro ao Salvar",
        description: 'Preencha os Campos Obrigatórios!',
        type: "warning",
      });
      return;
    }
    else {
      {
        const obj = {
          nome: nome,
          email: email,
          senha: senha,
        }

        const res = await api.post('pam3etim/bd/login/cadastro.php', obj);

        if (res.data.sucesso === false) {
          /* showMessage({
            message: "Erro ao Salvar",
            description: res.data.mensagem,
            type: "warning",
            duration: 3000,
          }); */

          return;
        }

        setSuccess(true);
        /* showMessage({
          message: "Salvo com Sucesso",
          description: "Registro Salvo",
          type: "success",
          duration: 800,
        }); */
        console.log("chegou!!!!");
        navigation.push("Usuario")

        /* } catch (error) {
           Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
           setSucess(false); */
      }
    }
  }
  /*   const checkLogin = async () => {
      
      const user = await AsyncStorage.getItem('@user');
      if (confirmarSenha != "" && confirmarSenha == senha ) {
         
         navigate({saveData}) ;
      }
      else {
          Alert.alert('Senhas Diferentes !')
      }
  
     
    } */

  /*   useEffect(() => {
      checkLogin();
    }, []); */


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
        onPress={saveCadastro}>
        <Text style={styles.text}>Cadastrar</Text>
      </TouchableOpacity>

      <Image style={styles.logoInk} source={require('../../assets/logo_2.png')} />

    </View>
  )
}