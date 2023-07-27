import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { TouchableOpacity, View, Text, TextInput, Image, StatusBar, Alert, Platform } from 'react-native';
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as ImageCameraCall from "expo-image-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import url from "../../services/url";
import DateTimePicker from '@react-native-community/datetimepicker';

//import { Splash } from '../../lotties/Splash'; 
import api from '../../services/api';

export default function CadastrarTatuador() {
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [imgProfile, setImgProfile] = useState('');
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

        setImgProfile(formData);
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

        setImgProfile(data);
    }


    /* Data picker */
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
                formData.append('cpf', cpf);
                formData.append('especialidade', especialidade);
                formData.append('data', dataSelected);

                //Upload da Imagem        
                formData.append("photo", {
                    name: imgProfile.uri,
                    type: 'image/png',
                    uri: imgProfile.uri
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

                xhr.open("POST", url + "/InKonnectPHP/bd/login/cadastroTatuador.php");
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
                alert('ola');
                navigation.push("LoginTatuador")

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

            <View>
                <Image style={styles.logo} source={require('../../assets/INKonnect.png')} />
            </View>


            <View style={styles.form}>
                <Text style={{ fontSize: 20, color: '#fff' }}>CadastroTatuador</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                    <View style={{ alignContent: 'flex-end', width: '50%' }}>
                        <Text style={styles.formLabel}>Nome:</Text>
                        <TextInput
                            style={styles.login}
                            placeholder="João da Silva"
                            placeholderTextColor='#413B33'
                            value={nome}
                            onChangeText={(nome) => setNome(nome)}
                        />
                    </View>

                    <View style={{ flexDirection: 'column', width: '50%' }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={imagePickerCall}
                        >
                            <Text styles={styles.buttonText}>Tirar Foto </Text>
                        </TouchableOpacity>
                        <Image
                            source={{
                                uri: imgProfile
                                    ? imgProfile.uri
                                    : ""
                            }}
                            style={styles.imgContainer}
                        ></Image>
                    </View>
                </View>

                <Text style={styles.formLabelEmail}>Email:</Text>
                <TextInput
                    style={styles.login}
                    placeholder="Email"
                    placeholderTextColor='#413B33'
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />

                <View style={{ width: '100%', flexDirection: 'row', marginTop: -10, }}>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.formLabel}>Senha:</Text>
                        <TextInput
                            placeholderTextColor='#413B33'
                            secureTextEntry={true}
                            style={styles.login}
                            placeholder="Senha"
                            value={senha}
                            onChangeText={(senha) => setSenha(senha)}
                        />
                    </View>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.formLabelData}>Data de Nascimento:</Text>
                        <TouchableOpacity
                            style={styles.btnData}
                            onPress={() => showMode('date')}>
                            <Text style={styles.textBtnData}>{date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}</Text>

                        </TouchableOpacity>
                    </View>
                </View>

                {show && (
                    <DateTimePicker
                        testeID='dateTimePicker'
                        value={date}
                        mode={mode}
                        is24Hour={true}                        
                        display='default'
                        onChange={onChangeDate}
                    />)}

                <View style={{ width: '100%', flexDirection: 'row', }}>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.formLabel}>CPF:</Text>
                        <TextInput
                            placeholderTextColor='#413B33'
                            secureTextEntry={false}
                            style={styles.login}
                            placeholder="cpf"
                            value={cpf}
                            onChangeText={(cpf) => setCpf(cpf)}
                        />
                    </View>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.formLabel}>Especialidade:</Text>
                        <TextInput
                            placeholderTextColor='#413B33'
                            secureTextEntry={false}
                            style={styles.login}
                            placeholder="Especialidade"
                            value={especialidade}
                            onChangeText={(especialidade) => setEspecialidade(especialidade)}
                        />
                    </View>
                </View>


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


            <View>
                <Image style={styles.logoInk} source={require('../../assets/logo_2.png')} />
            </View>

        </View>
    )
}