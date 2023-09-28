import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginTatuador from '../screens/LoginTatuador';
import LoginUsuario from '../screens/LoginUsuario';
import ChooseUser from '../screens/ChooseUser';
//import { Splash } from '../lotties/Splash';
import AuthRoutes from './tab.routes';
import Usuario from '../screens/Usuario';
import NovoUsuario from '../screens/NovoUsuario';
import cadastrarUsuario from '../screens/CadastrarUsuario';
import cadastrarTatuador from '../screens/CadastrarTatuador';
import DrawerRoutes from '../components/CustomDrawer';
import DrawerRoutesCliente from '../components/CustomDrawerCliente';
import TatuadorProfile from '../screens/TatuadorProfile';
import ClienteProfile from '../screens/ClienteProfile';
import CriacaoPost from '../screens/CriacaoPost';
import AuthRoutesCliente from './routesCliente/tab.routes';
import CalendarioTatuador from '../screens/CalendarioTatuador';
import MapaScreen from '../screens/MapaUsuario';
import CameraCliente from '../screens/CameraCliente';
import VisitaTatuadorPofile from '../screens/VisitaTatuadorProfile'
import Discover from '../screens/Discover';
import ChatScreenCliente from '../screens/ChatScreenCliente';
import ChatScreenTatuador from '../screens/ChatScreenTatuador';
const Stack = createNativeStackNavigator();

import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";

const pubnub = new PubNub({
  subscribeKey: "sub-c-f716f44e-6523-4a11-a201-91732b78ab1a",
  publishKey: "pub-c-e706fc27-484d-4ed5-a812-f0c2998efd00",
  uuid: "0",
});

function StackNavigator() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }
        }>
            <Stack.Screen name="ChooseUser" component={ChooseUser} />
            <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
            <Stack.Screen name="DrawerRoutesCliente" component={DrawerRoutesCliente} />
            <Stack.Screen name="Discover" component={Discover} />

            <Stack.Screen name="LoginUsuario" component={LoginUsuario} />
            <Stack.Screen name="CadastrarUsuario" component={cadastrarUsuario} />

            <Stack.Screen name="LoginTatuador" component={LoginTatuador} />
            <Stack.Screen name="CadastrarTatuador" component={cadastrarTatuador} />

            <Stack.Screen name="CalendarioTatuador" component={CalendarioTatuador} />
            <Stack.Screen name="ChatScreenTatuador" component={ChatScreenTatuador} />


            <Stack.Screen name="Home" component={AuthRoutes} />
            <Stack.Screen name="HomeCliente" component={AuthRoutesCliente} />
            <Stack.Screen name="CameraCliente" component={CameraCliente} />
            <Stack.Screen name="ChatScreenCliente" component={ChatScreenCliente} />

            <Stack.Screen name="TatuadorProfile" component={TatuadorProfile} />
            <Stack.Screen name="VisitaTatuadorProfile" component={VisitaTatuadorPofile} />
            <Stack.Screen name="ClienteProfile" component={ClienteProfile} />

            <Stack.Screen name="CriacaoPost" component={CriacaoPost} />
            <Stack.Screen name="MapaScreen" component={MapaScreen} />

            <Stack.Screen name="Usuario" component={Usuario} />
            <Stack.Screen name="NovoUsuario" component={NovoUsuario} />
        </Stack.Navigator>
    )
}

function AppRoutes() {


    return (
        <NavigationContainer>
            <PubNubProvider client={pubnub}>
                <StackNavigator />
            </PubNubProvider>
        </NavigationContainer>

    )
}
export default AppRoutes;