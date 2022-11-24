import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import ImageComp from "../components/ImageComp";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { Pokemon } from "../screens/Produto";
import { Home } from "../screens/Home";
import Login from "../screens/Login";
import  { PokemonCard }  from "../components/PokemonCard"
import { Carrinho } from "../screens/Cart";
import Autores from "../components/Autores";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
  Home: { token: string };
  Cards: undefined;
  Cart: undefined;
  Logout: undefined;
}
export function Routeshome() {

  return (
     <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#000",
                tabBarInactiveTintColor: "#aaa",
                tabBarInactiveBackgroundColor: "#FFD700",
                tabBarStyle: { backgroundColor: "#FFD700", paddingBottom: 1 ,height:50, borderTopWidth:3, borderTopColor:'black'}
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                          <AntDesign name="home" size={24} color="black" />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Cards"
                component={Pokemon}
                options={{
                    tabBarIcon: ({ color }) => {
                      return (
                        <MaterialCommunityIcons name="cards-outline" size={24} color="black" />
                      )
                    }
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Carrinho}
                options={{
                    tabBarIcon: ({ color }) => {
                      return (
                        <AntDesign name="shoppingcart" size={24} color="black" />
                      )
                    }
                }}
            />
        </Tab.Navigator>

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
        <Stack.Screen  
          options={{ headerShown: false }} 
          name="Home" 
          component={Routeshome} />
        
        <Stack.Screen  
          options={{ headerShown: false }} 
          name="ImageComp" 
          component={ImageComp} />
        <Stack.Screen  
          options={{ headerShown: false }} 
          name="Cards" 
          component={PokemonCard} />
        <Stack.Screen  
          options={{ headerShown: false }} 
          name="Autores" 
          component={Autores} />


      </Stack.Navigator> 
    </NavigationContainer>

  );
}