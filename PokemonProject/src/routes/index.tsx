import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import ButtonVertical from '../components/BotaoVertical';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator()

export type RootTabParamList = {
    Home: {token:string};
}

const TabNavigator = () =>{
    return(
    <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#aaa",
                tabBarInactiveBackgroundColor: "#000",
                tabBarStyle: { backgroundColor: "#000", paddingBottom: 1 }
            }}
        >
            <Tab.Screen name='Home' component={Home} options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <ButtonVertical icon="home" text={Home}/>)}}}/>
        </Tab.Navigator>)}
        
export function Routes() {
    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    );
}