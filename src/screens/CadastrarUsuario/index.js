import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { TouchableOpacity, View, Text, TextInput, Image, StatusBar, Alert, } from 'react-native';
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as ImageCameraCall from "expo-image-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import url from "../../services/url";
//import { Splash } from '../../lotties/Splash'; 
import api from '../../services/api';

export default function CadastrarUsuario() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [img, setImg] = useState();
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [success, setSuccess] = useState(false);

  async function login() {
    const obj = { email, senha };
    const res = await api.post('InKonnectPHP/BD/login/login.php', obj);

    if (res.formData.result === 'Dados Incorretos!') {
      Alert.alert('Ops!', 'Dados Incorretos!');
    } else {
      await AsyncStorage.setItem('@user', JSON.stringify(res.formData.result[0].id));
      await AsyncStorage.setItem('@nivel', JSON.stringify(res.formData.result[0].nivel));

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      });
    }

  }

  async function imagePickerCall() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== "granted") {
        alert("Nós precisamos dessa permissão.");
        return;
      }
    }

    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All
    });

    if (data.canceled) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setImg(data);
  }

  async function imageCameraCall() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      if (status !== "granted") {
        alert("Nós precisamos dessa permissão.");
        return;
      }
    }

    const formData = await ImageCameraCall.launchCameraAsync({
      mediaTypes: ImageCameraCall.MediaTypeOptions.All
    });

    if (formData.canceled) {
      return;
    }

    if (!formData.uri) {
      return;
    }

    setImg(formData);
  }

  async function saveCadastro() {
    if (nome == "" || senha == "" || email == "")/* || confirmarSenha != "" && confirmarSenha == senha )*/ {
      Alert({
        message: "Erro ao Salvar",
        description: 'Preencha os Campos Obrigatórios!',
        type: "warning",
      });
      return;
    }
    else {
      {
        /*  const obj = {
           nome: nome,
           email: email,
           senha: senha,
         } */
        var formData = new FormData();

        /* dados dos inputs */
        formData.append('nome', nome);
        formData.append('email', email);
        formData.append('senha', senha);

        //Upload da Imagem        
        formData.append("photo", {
          name: img.uri,
          type: 'image/png',
          uri: img.uri
        }, "image.png");


        /* fetch('http://26.191.226.215/InKonnectPHP/bd/login/cadastro.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-formData',
          },
          body: formData
        }) */

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        console.log(formData);
        console.log("aoba");

        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            console.log(this.responseText);
            console.log("Imagemmm!!!!");
          }
        });

        xhr.open("POST", url + "/InKonnectPHP/bd/login/cadastro.php");
        xhr.send(formData);
        //-----FIM UPLOAD IMAGEM----

        /* IMPORTANTE ESSE(ENVIA OS DADOS DO USUARIO 'NOME','SENHA')*/
        /*         const res = await api.post('InKonnectPHP/bd/login/cadastro.php', obj); 
         */

        //if (res.formData.sucesso === false) {
        /* showMessage({
          message: "Erro ao Salvar",
          description: res.formData.  mensagem,
          type: "warning",
          duration: 3000,
        }); */

        //  return;
        // }

        setSuccess(true);
        /* showMessage({
          message: "Salvo com Sucesso",
          description: "Registro Salvo",
          type: "success",
          duration: 800,
        }); */
        console.log("chegou!!!!");
        navigation.push("LoginUsuario")

        /* } catch (error) {
           Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
           setSucess(false); */
      }
    }
  }
  /*   const checkLogin = async () => {
      
      const user = await AsyncStorage.getItem('@user');
      if (confirmarSenha != "" && confirmarSenha == senha ) {
         
         navigate({saveformData}) ;
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

      <Image style={styles.logo} source={require('../../assets/INKonnect.png')} />


      <View style={styles.form}>
        <Text style={{ fontSize: 20, color: '#fff' }}>CadastroTatuador</Text>
        <View style={{ width: '50%', flexDirection: 'row', marginTop: 50, }}>
          <View style={{ alignContent: 'flex-end' }}>
            <Text style={styles.formLabel}>Nome:</Text>
            <TextInput
              style={styles.login}
              placeholder="João da Silva"
              placeholderTextColor='#413B33'
              value={nome}
              onChangeText={(nome) => setNome(nome)}
            />
          </View>

          <View style={{ flexDirection: 'column', marginStart: 60, }}>
            <TouchableOpacity
              style={styles.button}
              onPress={imagePickerCall}
            >
              <Text styles={styles.buttonText}>Tirar Foto </Text>
            </TouchableOpacity>
            <Image
              source={{
                uri: img
                  ? img.uri
                  : ""
              }}
              style={styles.imgContainer}
            ></Image>
          </View>
        </View>

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


        {/* <Text style={styles.formLabel}>Confirme a senha:</Text>
<TextInput
placeholderTextColor='#413B33'
secureTextEntry={true}
style={styles.login}
placeholder="Senha"
value={confirmarSenha}
onChangeText={(confirmarSenha) => setConfirmarSenha(confirmarSenha)}
/> */}


        {/*   <TouchableOpacity
style={styles.loginSave}
onPress={login}
>

<Text style={styles.text}>Entrar</Text>
 </TouchableOpacity>*/}
        <TouchableOpacity
          style={styles.loginSave}
          onPress={saveCadastro}>
          <Text style={styles.text}>Cadastrar</Text>
        </TouchableOpacity>


      </View>
      <Image style={styles.logoInk} source={require('../../assets/logo_2.png')} />



    </View>


  )
}