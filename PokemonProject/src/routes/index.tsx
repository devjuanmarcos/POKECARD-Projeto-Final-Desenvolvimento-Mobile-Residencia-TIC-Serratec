import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons"

import ImageComp from "../components/ImageComp";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { Pokemon } from "../screens/Produto";
import { Home } from "../screens/Home";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
  home: { token: string };
  Cartas: undefined;
  Carrinho: undefined;
}
<<<<<<< HEAD

=======
>>>>>>> Dev
export function Routeshome() {

  return (
     <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#aaa",
                tabBarInactiveBackgroundColor: "#000",
                tabBarStyle: { backgroundColor: "#000", paddingBottom: 2 ,height:50}
            }}
        >
            <Tab.Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <MaterialCommunityIcons
                                resizeMode='contain'
                                name="home"
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Cartas"
                component={Pokemon}
                options={{
                    tabBarIcon: ({ color }) => {
                      return (
                        <MaterialCommunityIcons
                          resizeMode='contain'
                          name="cards"
                        />
                      )
                    }
                }}
            />
        </Tab.Navigator>
<<<<<<< HEAD
    
=======

>>>>>>> Dev
  );
            }

export function Routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "white",
        }}
        initialRouteName="Login"
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
<<<<<<< HEAD
        
       
        <Stack.Screen  options={{ headerShown: false }} name="Home" component={Routeshome} />
=======
        <Stack.Screen  
          options={{ headerShown: false }} 
          name="Home" 
          component={Routeshome} />
>>>>>>> Dev

      </Stack.Navigator> 
    </NavigationContainer>

  );
}