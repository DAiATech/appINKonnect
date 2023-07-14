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
const Stack = createNativeStackNavigator();


function StackNavigator() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }
        }>
            <Stack.Screen name="ChooseUser" component={ChooseUser} />
            <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
            <Stack.Screen name="DrawerRoutesCliente" component={DrawerRoutesCliente} />

            <Stack.Screen name="LoginUsuario" component={LoginUsuario} />
            <Stack.Screen name="CadastrarUsuario" component={cadastrarUsuario} />

            <Stack.Screen name="LoginTatuador" component={LoginTatuador} />
            <Stack.Screen name="CadastrarTatuador" component={cadastrarTatuador} />

            <Stack.Screen name="CalendarioTatuador" component={CalendarioTatuador} />

            <Stack.Screen name="Home" component={AuthRoutes} />
            <Stack.Screen name="HomeCliente" component={AuthRoutesCliente} />

            <Stack.Screen name="TatuadorProfile" component={TatuadorProfile} />
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
            <StackNavigator />
        </NavigationContainer>

    )
}
export default AppRoutes;