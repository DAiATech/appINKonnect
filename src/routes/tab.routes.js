import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import fonts from '../styles/fonts';

import DrawerRoutes from './drawer.routes';
import Usuario from '../screens/Usuario';
import Feed from '../screens/Feed';
import CalendarioTatuador from '../screens/CalendarioTatuador';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Discover from '../screens/Discover';
import ChatTatuador from '../screens/ChatTatuador';
const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    const navigation = useNavigation();
    return (
        <AppTab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#413B33",
                tabBarInactiveTintColor: '#EAE0D5',
                tabBarHideOnKeyboard: false,
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    height: 65,
                    paddingTop: 10,
                    backgroundColor: "#121212",
                    borderTopWidth: 3,
                    borderTopColor: "#413B33"
                },
            }}

        >
            <AppTab.Screen
                name="Inicio"
                component={DrawerRoutes}

                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="house-siding"
                            size={size}
                            color={color}
                        />
                    )),

                    tabBarLabel: (({ focused, color }) => (
                        <View>
                            <Text
                                style={focused ? {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12,
                                    textAlign: 'center',
                                } : {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12
                                }}
                            >
                                Inicio
                            </Text>
                            <View
                                style={focused ? {

                                    backgroundColor: color,
                                    borderColor: color,
                                    width: 45,
                                    height: 2,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    marginTop: 5,
                                } : {
                                    height: 2,
                                }}
                            >
                            </View>
                        </View>
                    ))
                }}
            />

            <AppTab.Screen
                name="Discover"
                component={ChatTatuador}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="chat"
                            size={size}
                            color={color}
                        />
                    )),

                    tabBarLabel: (({ focused, color }) => (
                        <View>
                            <Text
                                style={focused ? {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12,
                                    textAlign: 'center',

                                } : {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12
                                }}
                            >
                                Usuários
                            </Text>
                            <View
                                style={focused ? {
                                    backgroundColor: color,
                                    borderColor: color,
                                    width: 65,
                                    height: 2,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    marginTop: 5,
                                } : {
                                    height: 2,
                                }}
                            >
                            </View>
                        </View>
                    ))
                }}
            />

            <AppTab.Screen
                name="Aba 3"
                component={CalendarioTatuador}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons
                            name="calendar"
                            size={size}
                            color={color}
                        />
                    )),

                    tabBarLabel: (({ focused, color }) => (
                        <View>
                            <Text
                                style={focused ? {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12,
                                    textAlign: 'center',
                                } : {
                                    color: color,
                                    fontFamily: fonts.text,
                                    fontSize: 12
                                }}
                            >
                                Feed
                            </Text>
                            <View
                                style={focused ? {
                                    backgroundColor: color,
                                    borderColor: color,
                                    width: 90,
                                    height: 2,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    marginTop: 5,
                                } : {
                                    height: 2,
                                }}
                            >
                            </View>
                        </View>
                    ))
                }}
            />

            
        </AppTab.Navigator>
    )
}

export default AuthRoutes;