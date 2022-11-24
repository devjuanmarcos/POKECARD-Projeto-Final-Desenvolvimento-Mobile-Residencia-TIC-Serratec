import { Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from "react";
import { Botao } from '../../components/BotaoProps';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import { Button } from 'react-native-paper';
import * as Animatable from "react-native-animatable";
import { PokemonCard } from '../../components/PokemonCard';


export const Home = ({navigation}) =>{

  const [saudacoes, setSaudacoes] = useState<string>("");

  const TelaLogin = () => {
    navigation.push("Login");
  };
  const TelaImageComp = () => {
    navigation.push("ImageComp");
  };
  const TelaCard = () => {
    navigation.push("Produto");
  };

  // useEffect(() => {
  //     const horaAtual = new Date().getHours();
  //     if (horaAtual < 12) {
  //         setSaudacoes("Bom dia!")
  //     } else if (horaAtual >= 12 && horaAtual < 18) {
  //         setSaudacoes("Boa tarde!")
  //     } else {
  //         setSaudacoes("Boa noite!")
  //     }
  // }, []);
  
 
  
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBackground}
      source={require('../../assets/fundoHome.png')}>
      
        <View style={styles.header}>
        
          <Image style={styles.image}
            source={require('../../assets/logoPocke.png')}/>

            <Animatable.Image
                      animation="pulse"
                      iterationCount="infinite"
                      direction="alternate"
                      style={styles.logo1}
                      source={require("../../assets/pokemon-logo-8.png")}
                    />
            <TouchableOpacity style={styles.Logout}
              onPress={TelaLogin}
              >
                <Text style={styles.title} >
                  Sair 
                </Text>
                <MaterialIcons style={styles.icone} name="logout" size={24} color="black" />
            </TouchableOpacity>
            {/* <Text style={styles.title}>
                    {saudacoes} Pronto para aventura?
            </Text> */}
        
        </View>
        <View style={styles.headerButton}  >
            <TouchableOpacity style={styles.boxButton}
            onPress={TelaImageComp}>
              
              <Image style={styles.imageBox}
                source={require('../../assets/pikaEvol.jpg')}/>
                <View style={styles.button}>
                  <Text style={styles.title}>
                   -- PACK PIKACHU IRADO --
                  </Text>
                  <Text style={styles.textoDescricao}>
                    As mais Tops e fofas imagens fofinhas do fofo do Pikachu.
                  </Text>
                </View>
            </TouchableOpacity>
          <TouchableOpacity style={styles.boxButton}
          onPress={TelaCard}>
            <Image style={styles.imageBox}
              source={require('../../assets/PikaDeboa.jpg')}/>
              <View style={styles.button}>
                <Text style={styles.title}>
                  -- CARTAS POKEMON --
                </Text>
                <Text style={styles.textoDescricao}>
                    Loja de cards Pokemon, com várias opções para escolher, são realmente muitas!
                </Text>
              </View>
          </TouchableOpacity>
        </View>
       </ImageBackground> 
       
    </View>
  );
}