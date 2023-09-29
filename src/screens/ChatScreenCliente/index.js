import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Image
} from "react-native";
import { PubNubConsumer, usePubNub } from "pubnub-react";
import { imagenn } from '../../assets/logo2.png'
import { useRoute } from "@react-navigation/native";
import url from "../../services/url";
import { styles } from './style';
import HeaderUsuario from "../../components/PagePreSet/HeaderUsuario";
ChatScreenCliente = () => {
  // A prop `route` será baixada do React Navigation.
  // Ele conterá nosso emoji em `route.params.emoji`.
  /*   const userEmoji = source={require('../../assets/images/wallpaperProfileImage.png')};
   */
  // Aqui obtemos nossa instância PubNub  do provedor que importamos
  const pubnub = usePubNub();

  // Nas próximas duas instruções definimos o state necessário para nosso chat
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const route = useRoute();
  useEffect(() => {    
    // Verifica se o PubNub está definido
    if (pubnub) {
      // Define o UUID do nosso usuário para o emoji escolhido
      pubnub.setUUID(route.params.userName);
      // Cria um listener que enviará novas mensagens para nossa variável `messages`
      // usando a função `setMessages`.
      const listener = {
        message: envelope => {
          console.log(envelope)
          setMessages(msgs => [
            ...msgs,
            {
              id: envelope.message.id,
              author: envelope.publisher,
              content: envelope.message.content,
              timetoken: envelope.timetoken
            }
          ]);
        }
      };

      // Adiciona o listener à instância do pubnub e se inscreve no canal `chat`.
      pubnub.addListener(listener);
      pubnub.subscribe({ channels: ["chat"] });

      // Precisamos retornar uma função que manipulará o cancelamento ao sair do pubnub
      return () => {
        pubnub.removeListener(listener);
        pubnub.unsubscribeAll();
      };
    }
  }, [pubnub]);

  // Esta função trata do envio de mensagens.
  const handleSubmit = () => {
    // Limpa o campo de entrada.
    setInput("");

    // Cria a mensagem com `id` aleatório.
    const message = {
      content: input,
      id: Math.random()
        .toString(16)
        .substr(2)
    };

    // Publica nossa mensagem no canal `chat`
    pubnub.publish({ channel: "chat", message });
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior="height"
        keyboardVerticalOffset={Platform.select({
          ios: 78,
          android: 0
        })}
      >

        <HeaderUsuario />
        <View style={{ padding: 15, backgroundColor: '#1B292f', flexDirection: 'row' }}>
          <Image style={styles.perfilImg} source={{
            uri: url + "/InKonnectPHP/BD/tatuadores/imgsTatuadores" + "/" + route.params.profileImagemTatuador
          }} />
          <Text style={{ color: '#C6AC8F', fontSize: 18, fontWeight: '700', marginTop: 10 }}>{route.params.tatuadorNome}</Text>
        </View>       
        <View style={styles.topContainer}>
          {messages.map(message => (
            <View key={message.timetoken} style={styles.messageContainer}>
              <View style={styles.avatar}>
                <Image style={styles.perfilImg} source={{
                  uri: url + "/InKonnectPHP/BD/usuarios/imgsUsuarios" + "/" + route.params.userImg
                }} />
              </View>
              <View style={styles.messageContent}>
                <Text>{message.content}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.bottomContainer}>
          <TextInput
            style={styles.textInput}
            value={input}
            onChangeText={setInput}
            onSubmitEditing={handleSubmit}
            returnKeyType="send"
            enablesReturnKeyAutomatically={true}
            placeholder="Type your message here..."
          />
          <View style={styles.submitButton}>
            {input !== "" && <Button title="Send" onPress={handleSubmit} />}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreenCliente;

