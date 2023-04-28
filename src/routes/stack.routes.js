import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login';
//import { Splash } from '../lotties/Splash';
import AuthRoutes from './tab.routes';
import Usuario from '../screens/Usuario';
import NovoUsuario from '../screens/NovoUsuario';
import Cadastrar from '../screens/Cadastrar';

const Stack = createNativeStackNavigator();


function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}
        }>
            
            <Stack.Screen name="Login" component={Login}  /> 
            <Stack.Screen name="Home" component={AuthRoutes} />      
            <Stack.Screen name="Usuario" component={Usuario} /> 
            <Stack.Screen name="NovoUsuario" component={NovoUsuario} /> 
            <Stack.Screen name="Cadastrar" component={Cadastrar} /> 
        </Stack.Navigator>
    )
}

function AppRoutes(){
    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
export default AppRoutes;