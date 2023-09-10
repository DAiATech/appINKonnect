import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { TouchableOpacity, View, Text, TextInput, Image, StatusBar, Alert, ScrollView } from 'react-native';
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as ImageCameraCall from "expo-image-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import url from "../../services/url";
import DateTimePicker from '@react-native-community/datetimepicker';
import api from '../../services/api';
import { Ionicons } from '@expo/vector-icons'
export default function CadastrarUsuario() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [img, setImg] = useState();
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [success, setSuccess] = useState(false);

  async function inputTexto() {
    const obj = { email, senha };
    const res = await api.post('InKonnectPHP/BD/inputTexto/inputTexto.php', obj);

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

  /* Data nascimento */
  const [date, setDate] = useState(new Date);
  const [dataSelected, setDataSelected] = useState();
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getFullYear() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getDate();

    setDate(currentDate);

    setText(fDate)
    setDataSelected(fDate)

    console.log(date)
    console.log("ola");
    console.log(fDate)
  }
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  async function saveCadastro() {
    if (nome == "" || senha == "" || email == "") {
      Alert({
        message: "Erro ao Salvar",
        description: 'Preencha os Campos Obrigatórios!',
        type: "warning",
      });
      return;
    }
    else {
      {

        var formData = new FormData();

        /* dados dos inputs */
        formData.append('nome', nome);
        formData.append('email', email);
        formData.append('senha', senha);
        formData.append('data', dataSelected);

        //Upload da Imagem        
        formData.append("photo", {
          name: img.uri,
          type: 'image/png',
          uri: img.uri
        }, "image.png");


        /* fetch('http://26.191.226.215/InKonnectPHP/bd/inputTexto/cadastro.php', {
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
      }
    }
  }


  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={require('../../assets/INKonnect.png')} />
      <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center', }}>CadastoUsuario</Text>

      <ScrollView style={styles.containerScroll}>
        <View style={styles.form}>
          <View style={styles.divisorSecaoRow}>
            <View style={styles.divisorSecao}>
              <Text style={styles.formLabel}>Nome:</Text>
              <TextInput
                style={styles.inputTexto}
                placeholder="João da Silva"
                placeholderTextColor='#413B33'
                value={nome}
                onChangeText={(nome) => setNome(nome)}
              />
              <View style={{ marginTop: 10 }}>
                <Text style={styles.formLabel}>Email:</Text>
                <TextInput
                  style={styles.inputTexto}
                  placeholder="Email"
                  placeholderTextColor='#413B33'
                  value={email}
                  onChangeText={(email) => setEmail(email)}
                />
              </View>

            </View>

            <View style={{ width: '50%' }}>
              <TouchableOpacity
                style={styles.button}
                onPress={imagePickerCall}
              >
                {img ?
                  <>
                    <Image
                      source={{
                        uri: img
                          ? img.uri
                          : ""
                      }}
                      style={styles.imgContainer}
                    ></Image>
                    <Ionicons name="add" size={35} color="#C6AC8F" style={styles.iconePlus} />

                  </>

                  : <Ionicons name="add" size={35} color="#C6AC8F" />}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.divisorSecaoRow}>
            <View style={styles.divisorSecao}>
              <Text style={styles.formLabel}>Senha:</Text>
              <TextInput
                placeholderTextColor='#413B33'
                secureTextEntry={true}
                style={styles.inputTexto}
                placeholder="Senha"
                value={senha}
                onChangeText={(senha) => setSenha(senha)}
              />
            </View>
            <View style={styles.divisorSecao}>
              <Text style={styles.formLabel}>Data Nascimento:</Text>
              <TouchableOpacity
                style={styles.btnData}
                onPress={() => showMode('date')}>
                <Text style={styles.textBtnData}>{date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}</Text>
              </TouchableOpacity>
            </View>
            {show && (
              <DateTimePicker
                testeID='dateTimePicker'
                value={date}
                mode={mode}
                is24Hour={true}
                display='default'
                onChange={onChangeDate}
              />)
            }


          </View>

          <TouchableOpacity
            style={styles.btnSave}
            onPress={saveCadastro}>
            <Text style={styles.text}>Cadastrar</Text>
          </TouchableOpacity>


        </View>
        <Image style={styles.logoInk} source={require('../../assets/logo_2.png')} />

      </ScrollView>

    </View>


  )
}