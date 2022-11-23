import { Text, View } from 'react-native';
import React, { useEffect, useState } from "react";
import { Botao } from '../../components/BotaoProps'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles'
import { Fontisto } from '@expo/vector-icons'; 

export const Home = ({navigation}) =>{

  const [saudacoes, setSaudacoes] = useState<string>("");


  useEffect(() => {
      const horaAtual = new Date().getHours();
      if (horaAtual < 12) {
          setSaudacoes("Bom Dia!")
      } else if (horaAtual >= 12 && horaAtual < 18) {
          setSaudacoes("Boa Tarde!")
      } else {
          setSaudacoes("Boa noite!")
      }
  }, []);
  
 
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Fontisto name="smiling" size={24} color="black" />
          <Text style={styles.title}>
                  {saudacoes}
              </Text>
          <Text style={styles.title}>
                  Seja Bem Vindo!
              </Text>
        </View> 
        <View style={styles.headerButton}  >
        <Botao style={styles.button}
          title="Imagem"
          onPress={() => {
            navigation.navigate("Imagem", {
              params: { texto: "BatataTeste" },
            });
          }}
        ></Botao>
        <Botao style={styles.button}
          title="Pokemon"
          onPress={() => {
            navigation.navigate("Pokemon", {
              params: { texto: "How is that pokemon?" },
            });
          }}
        ></Botao>
      </View>
      
    </View>
  );
}