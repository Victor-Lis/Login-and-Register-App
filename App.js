import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firebase from './src/Connections/firebaseConnection';

import Login from './src/Components/Login';
import Cadastro from './src/Components/Cadastro';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFF',
          

          tabBarStyle:{
            backgroundColor: '#202225',
            borderTopWidth: 0,
            // display: "none"
          }

        }}
      >
        <Tab.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Text style={{color: color, size: size}}> Cadastro </Text>
            },
          }}
        />

        <Tab.Screen 
          name="Login" 
          component={Login} 
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Text style={{color: color, size: size}}> Login </Text>
            }
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
