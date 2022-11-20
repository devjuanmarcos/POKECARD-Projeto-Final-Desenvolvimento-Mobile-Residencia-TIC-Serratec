import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MeuComponente from '../components/MeuComponente';
import ImageComp from '../components/ImageComp';

const Stack = createStackNavigator()

export default function index() {
    return(
        <NavigationContainer> 
            <Stack.Navigator initialRouteName='Tela Inicial'> 
        <Stack.Screen name="Tela Inicial" component={MeuComponente}/>
        <Stack.Screen name="imagem" component={ImageComp}/>

            </Stack.Navigator>
        </NavigationContainer>
    )

}
